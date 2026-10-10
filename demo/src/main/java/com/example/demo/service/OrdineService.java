package com.example.demo.service;

import com.example.demo.dto.DettaglioOrdineRequestDTO;
import com.example.demo.dto.OrdineDTO;
import com.example.demo.dto.OrdineRequestDTO;
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
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrdineService {

    private final OrdineRepository ordineRepository;
    private final UtenteRepository utenteRepository;
    private final ContoRepository contoRepository;
    private final PiattoRepository piattoRepository;
    private final CarrelloItemRepository carrelloItemRepository;
    private final SimpMessagingTemplate messagingTemplate;

    public OrdineDTO creaOrdine(OrdineRequestDTO dto) {
        Utente tavolo = trovaTavolo(dto.getTavoloId());
        Conto conto = getOrCreateContoAperto(tavolo);
        Ordine ordine = nuovoOrdine(tavolo);

        BigDecimal totale = BigDecimal.ZERO;
        for (DettaglioOrdineRequestDTO req : dto.getDettagli()) {
            Piatto piatto = piattoRepository.findById(req.getPiattoId())
                    .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + req.getPiattoId()));
            totale = totale.add(aggiungiDettaglio(ordine, piatto, req.getQuantita()));
        }
        OrdineDTO risultato = OrdineMapper.toDTO(salvaSuConto(conto, ordine, totale));
        
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

        Conto conto = getOrCreateContoAperto(tavolo);
        Ordine ordine = nuovoOrdine(tavolo);

        BigDecimal totale = BigDecimal.ZERO;
        for (CarrelloItem item : items) {
            totale = totale.add(aggiungiDettaglio(ordine, item.getPiatto(), item.getQuantita()));
        }
        Ordine salvato = salvaSuConto(conto, ordine, totale);

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

    private Conto getOrCreateContoAperto(Utente tavolo) {
        Conto conto = tavolo.getContoAttivo();
        if (conto == null) {
            conto = contoRepository.save(Conto.builder().tavolo(tavolo).build());
            tavolo.setContoAttivo(conto);
            utenteRepository.save(tavolo);
        } else if (conto.getStato() != Conto.StatoConto.APERTO) {
            throw new RuntimeException("Il conto è in fase di pagamento: non si possono inviare altri ordini.");
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

    private Ordine salvaSuConto(Conto conto, Ordine ordine, BigDecimal totale) {
        ordine.setTotale(totale); // prima il totale...
        conto.aggiungiOrdine(ordine); // ...poi il conto lo somma e imposta ordine.conto
        return ordineRepository.save(ordine);
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
}
