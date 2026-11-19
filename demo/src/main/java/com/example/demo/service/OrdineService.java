package com.example.demo.service;

import com.example.demo.dto.DettaglioOrdineRequestDTO;
import com.example.demo.dto.OrdineDTO;
import com.example.demo.dto.OrdineRequestDTO;
import com.example.demo.dto.StatoDettaglioUpdateDTO;
import com.example.demo.dto.StatoOrdineUpdateDTO;
import com.example.demo.mapper.DettaglioOrdineMapper;
import com.example.demo.mapper.OrdineMapper;
import com.example.demo.model.*;
import com.example.demo.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.math.BigDecimal;
import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class OrdineService {

    private static final Duration FINESTRA_ANTIDUPLICATO = Duration.ofSeconds(10);

    private final OrdineRepository ordineRepository;
    private final UtenteRepository utenteRepository;
    private final ContoRepository contoRepository;
    private final PiattoRepository piattoRepository;
    private final CarrelloItemRepository carrelloItemRepository;
    private final DettaglioOrdineRepository dettaglioOrdineRepository;
    private final SimpMessagingTemplate messagingTemplate;

    public OrdineDTO creaOrdine(OrdineRequestDTO dto) {
        Optional<Ordine> duplicato = trovaOrdineDuplicatoRecente(dto.getTavoloId(), dto.getDettagli());
        if (duplicato.isPresent()) {
            return OrdineMapper.toDTO(duplicato.get());
        }

        Utente tavolo = trovaTavolo(dto.getTavoloId());
        Conto conto = getOrCreateContoAperto(tavolo, dto);
        Ordine ordine = nuovoOrdine(tavolo);

        BigDecimal totale = BigDecimal.ZERO;
        for (DettaglioOrdineRequestDTO req : dto.getDettagli()) {
            Piatto piatto = piattoRepository.findById(req.getPiattoId())
                    .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + req.getPiattoId()));
            totale = totale.add(aggiungiDettaglio(ordine, piatto, req.getQuantita()));
        }
        OrdineDTO risultato = OrdineMapper.toDTO(salvaSuConto(conto, ordine, totale, dto));
        
        // NOTIFICA WEBSOCKET A CUCINA E ADMIN
        messagingTemplate.convertAndSend("/topic/ordini", risultato);

        return risultato;
    }

    public OrdineDTO creaOrdineDaCarrello(Long tavoloId) {
        Utente tavolo = trovaTavolo(tavoloId);

        List<CarrelloItem> items = carrelloItemRepository.findByTavoloId(tavoloId);
        if (items.isEmpty()) {
            throw new RuntimeException("Impossibile creare l'ordine: il carrello è vuoto.");
        }

        Conto conto = getOrCreateContoAperto(tavolo, null);
        Ordine ordine = nuovoOrdine(tavolo);

        BigDecimal totale = BigDecimal.ZERO;
        for (CarrelloItem item : items) {
            totale = totale.add(aggiungiDettaglio(ordine, item.getPiatto(), item.getQuantita()));
        }
        Ordine salvato = salvaSuConto(conto, ordine, totale, null);

        carrelloItemRepository.deleteByTavoloId(tavoloId);
        OrdineDTO risultato = OrdineMapper.toDTO(salvato);

        // NOTIFICA WEBSOCKET A CUCINA E ADMIN
        messagingTemplate.convertAndSend("/topic/ordini", risultato);

        return risultato;
    }

    // ---------- metodi di supporto ----------

    private Utente trovaTavolo(Long id) {
        Utente u = utenteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));
        if (u.getRuolo() != Utente.Ruolo.ROLE_TABLET || u.getNumeroTavolo() == null) {
            throw new RuntimeException("L'utente " + id + " non è un tavolo");
        }
        return u;
    }

    private Conto getOrCreateContoAperto(Utente tavolo, OrdineRequestDTO dto) {
        Conto conto = tavolo.getContoAttivo();
        if (conto == null) {
            conto = Conto.builder().tavolo(tavolo).tipoMenu(Conto.TipoMenu.ALLA_CARTA).build();
            applicaConfigurazioneMenu(conto, dto);
            conto = contoRepository.save(conto);
            tavolo.setContoAttivo(conto);
            utenteRepository.save(tavolo);
        } else if (conto.getStato() != Conto.StatoConto.APERTO) {
            throw new RuntimeException("Il conto è in fase di pagamento: non si possono inviare altri ordini.");
        } else {
            applicaConfigurazioneMenu(conto, dto);
        }
        return conto;
    }

    private Ordine nuovoOrdine(Utente tavolo) {
        return Ordine.builder()
                .tavolo(tavolo)
                .stato(Ordine.StatoOrdine.INVIATO)
                .totale(BigDecimal.ZERO)
                .dettagli(new ArrayList<>())
                .build();
    }

    private BigDecimal aggiungiDettaglio(Ordine ordine, Piatto piatto, Integer quantita) {
        DettaglioOrdine d = DettaglioOrdineMapper.toEntity(ordine, piatto, quantita);
        ordine.getDettagli().add(d);
        return d.getPrezzoUnitario().multiply(BigDecimal.valueOf(d.getQuantita()));
    }

    private Ordine salvaSuConto(Conto conto, Ordine ordine, BigDecimal totalePiatti, OrdineRequestDTO dto) {
        applicaConfigurazioneMenu(conto, dto);
        if (conto.getTipoMenu() == Conto.TipoMenu.ALL_YOU_CAN_EAT) {
            ordine.setTotale(BigDecimal.ZERO);
        } else {
            if (conto.getTipoMenu() == null) {
                conto.setTipoMenu(Conto.TipoMenu.ALLA_CARTA);
            }
            ordine.setTotale(totalePiatti);
        }
        conto.aggiungiOrdine(ordine);
        if (conto.getTipoMenu() == Conto.TipoMenu.ALL_YOU_CAN_EAT && conto.getTotaleFisso() != null) {
            conto.setTotale(conto.getTotaleFisso());
        }
        Ordine salvato = ordineRepository.save(ordine);
        contoRepository.save(conto);
        return salvato;
    }

    private Optional<Ordine> trovaOrdineDuplicatoRecente(Long tavoloId, List<DettaglioOrdineRequestDTO> dettagli) {
        if (tavoloId == null || dettagli == null || dettagli.isEmpty()) {
            return Optional.empty();
        }
        String fingerprint = calcolaFingerprintRichiesta(dettagli);
        LocalDateTime since = LocalDateTime.now().minus(FINESTRA_ANTIDUPLICATO);
        return ordineRepository.findRecentByTavoloWithDettagli(tavoloId, since).stream()
                .filter(o -> o.getStato() != Ordine.StatoOrdine.CANCELLATO && o.getStato() != Ordine.StatoOrdine.PAGATO)
                .filter(o -> fingerprint.equals(calcolaFingerprintOrdine(o)))
                .findFirst();
    }

    private String calcolaFingerprintRichiesta(List<DettaglioOrdineRequestDTO> dettagli) {
        return dettagli.stream()
                .sorted(Comparator.comparing(DettaglioOrdineRequestDTO::getPiattoId))
                .map(d -> d.getPiattoId() + ":" + d.getQuantita())
                .collect(Collectors.joining("|"));
    }

    private String calcolaFingerprintOrdine(Ordine ordine) {
        if (ordine.getDettagli() == null || ordine.getDettagli().isEmpty()) {
            return "";
        }
        return ordine.getDettagli().stream()
                .filter(d -> d.getStato() != DettaglioOrdine.StatoDettaglio.CANCELLATO)
                .sorted(Comparator.comparing(d -> d.getPiatto() != null ? d.getPiatto().getId() : 0L))
                .map(d -> (d.getPiatto() != null ? d.getPiatto().getId() : null) + ":" + d.getQuantita())
                .collect(Collectors.joining("|"));
    }

    private void applicaConfigurazioneMenu(Conto conto, OrdineRequestDTO dto) {
        if (dto == null || dto.getTipoMenu() == null) {
            if (conto.getTipoMenu() == null && (conto.getOrdini() == null || conto.getOrdini().isEmpty())) {
                conto.setTipoMenu(Conto.TipoMenu.ALLA_CARTA);
            }
            return;
        }

        Conto.TipoMenu richiesto = dto.getTipoMenu();
        if (conto.getTipoMenu() != null
                && conto.getOrdini() != null
                && !conto.getOrdini().isEmpty()
                && conto.getTipoMenu() != richiesto) {
            throw new IllegalArgumentException(
                    "Il conto è già avviato con menu " + conto.getTipoMenu() + ", non è possibile cambiarlo.");
        }

        conto.setTipoMenu(richiesto);
        if (richiesto == Conto.TipoMenu.ALL_YOU_CAN_EAT) {
            if (dto.getTotaleFisso() == null || dto.getNumeroPersone() == null || dto.getNumeroPersone() < 1
                    || dto.getTotaleFisso().signum() <= 0) {
                throw new IllegalArgumentException("Per All You Can Eat servono numero persone e totale fisso.");
            }
            conto.setNumeroPersone(dto.getNumeroPersone());
            conto.setTipoPasto(dto.getTipoPasto());
            conto.setPrezzoPerPersona(dto.getPrezzoPerPersona());
            conto.setTotaleFisso(dto.getTotaleFisso());
            conto.setTotale(dto.getTotaleFisso());
        }
    }

    // --------------------------------------
    @Transactional(readOnly = true)
    public OrdineDTO getOrdineById(Long id) {
        Ordine ordine = ordineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ordine non trovato con id: " + id));
        return OrdineMapper.toDTO(ordine);
    }

    @Transactional(readOnly = true)
    public List<OrdineDTO> getOrdiniByTavolo(Long tavoloId) {
        return ordineRepository.findByTavoloId(tavoloId).stream()
                .map(OrdineMapper::toDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public List<OrdineDTO> getOrdiniByStato(Ordine.StatoOrdine stato) {
        return ordineRepository.findByStato(stato).stream()
                .map(OrdineMapper::toDTO)
                .toList();
    }

    public OrdineDTO aggiornaStato(Long id, StatoOrdineUpdateDTO dto) {
        Ordine ordine = ordineRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Ordine non trovato con id: " + id));

        ordine.setStato(dto.getStato());
        OrdineDTO risultato = OrdineMapper.toDTO(ordineRepository.save(ordine));

        // NOTIFICA WEBSOCKET QUANDO LA CUCINA CAMBIA STATO
        messagingTemplate.convertAndSend("/topic/ordini", risultato);

        return risultato;
    }

    public OrdineDTO aggiornaStatoDettaglio(Long ordineId, Long dettaglioId, StatoDettaglioUpdateDTO dto) {
        Ordine ordine = ordineRepository.findById(ordineId)
                .orElseThrow(() -> new RuntimeException("Ordine non trovato con id: " + ordineId));

        DettaglioOrdine dettaglio = dettaglioOrdineRepository.findById(dettaglioId)
                .orElseThrow(() -> new RuntimeException("Dettaglio non trovato con id: " + dettaglioId));

        if (dettaglio.getOrdine() == null || !dettaglio.getOrdine().getId().equals(ordineId)) {
            throw new RuntimeException("Il dettaglio non appartiene all'ordine " + ordineId);
        }

        dettaglio.setStato(dto.getStato());
        dettaglioOrdineRepository.save(dettaglio);

        chiudiOrdineSeTuttiPiattiInviati(ordine);

        // I piatti cancellati non contano più nel totale dell'ordine/conto
        ricalcolaTotaleOrdine(ordine);
        OrdineDTO risultato = OrdineMapper.toDTO(ordineRepository.save(ordine));
        messagingTemplate.convertAndSend("/topic/ordini", risultato);
        return risultato;
    }

    /**
     * Quando ogni piatto non cancellato è INVIATO, l'ordine esce dalla coda cucina/admin (stato SERVITO).
     */
    private void chiudiOrdineSeTuttiPiattiInviati(Ordine ordine) {
        List<DettaglioOrdine> dettagli = ordine.getDettagli();
        if (dettagli == null || dettagli.isEmpty()) {
            return;
        }

        List<DettaglioOrdine> rilevanti = dettagli.stream()
                .filter(d -> d.getStato() != DettaglioOrdine.StatoDettaglio.CANCELLATO)
                .toList();

        if (rilevanti.isEmpty()) {
            if (ordine.getStato() != Ordine.StatoOrdine.CANCELLATO) {
                ordine.setStato(Ordine.StatoOrdine.CANCELLATO);
            }
            return;
        }

        boolean tuttiInviati = rilevanti.stream()
                .allMatch(d -> d.getStato() == DettaglioOrdine.StatoDettaglio.INVIATO);

        if (tuttiInviati && ordine.getStato() != Ordine.StatoOrdine.SERVITO) {
            ordine.setStato(Ordine.StatoOrdine.SERVITO);
        }
    }

    private void ricalcolaTotaleOrdine(Ordine ordine) {
        BigDecimal totale = BigDecimal.ZERO;
        for (DettaglioOrdine d : ordine.getDettagli()) {
            if (d.getStato() == DettaglioOrdine.StatoDettaglio.CANCELLATO) {
                continue;
            }
            totale = totale.add(
                    d.getPrezzoUnitario().multiply(BigDecimal.valueOf(d.getQuantita()))
            );
        }
        BigDecimal precedente = ordine.getTotale() != null ? ordine.getTotale() : BigDecimal.ZERO;
        BigDecimal delta = totale.subtract(precedente);
        if (ordine.getConto() != null && ordine.getConto().getTipoMenu() == Conto.TipoMenu.ALL_YOU_CAN_EAT) {
            ordine.setTotale(BigDecimal.ZERO);
            return;
        }
        ordine.setTotale(totale);
        if (ordine.getConto() != null && delta.compareTo(BigDecimal.ZERO) != 0) {
            BigDecimal contoTotale = ordine.getConto().getTotale() != null
                    ? ordine.getConto().getTotale()
                    : BigDecimal.ZERO;
            ordine.getConto().setTotale(contoTotale.add(delta));
        }
    }
}
