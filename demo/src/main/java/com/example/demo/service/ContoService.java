package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.ContoDTO;
import com.example.demo.mapper.ContoMapper;
import com.example.demo.model.Conto;
import com.example.demo.model.Ordine;

import java.util.LinkedHashMap;
import java.util.Objects;
import java.util.stream.Collectors;
import com.example.demo.model.Utente;
import com.example.demo.repository.ContoRepository;
import com.example.demo.repository.OrdineRepository;
import com.example.demo.repository.UtenteRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ContoService {

    private final ContoRepository contoRepository;
    private final UtenteRepository utenteRepository;
    private final OrdineRepository ordineRepository;
    private final SimpMessagingTemplate messagingTemplate;

    // Tablet: "Richiedi il conto" o "Paga in cassa"
    public ContoDTO richiediPagamento(Long tavoloId, Conto.RichiestaPagamento modalita) {
        Conto conto = contoRepository.findByTavoloIdAndStatoNot(tavoloId, Conto.StatoConto.PAGATO)
                .orElseThrow(() -> new RuntimeException("Nessun conto attivo per il tavolo " + tavoloId));
        if (modalita == null) {
            throw new IllegalArgumentException("Modalità richiesta pagamento obbligatoria");
        }
        conto.setRichiestaPagamento(modalita);
        conto.setStato(Conto.StatoConto.IN_PAGAMENTO);
        conto = contoRepository.save(conto);
        ContoDTO dto = contoToDtoConOrdini(conto);
        messagingTemplate.convertAndSend("/topic/conti", dto);
        return dto;
    }

    @Transactional(readOnly = true)
    public List<ContoDTO> getContiInPagamento() {
        return contoRepository.findByStato(Conto.StatoConto.IN_PAGAMENTO).stream()
                .map(ContoMapper::toDTO).toList();
    }

    // La cassa conferma l'incasso
    public ContoDTO confermaPagamento(Long contoId) {
        Conto conto = contoRepository.findById(contoId)
                .orElseThrow(() -> new RuntimeException("Conto non trovato con id: " + contoId));
        if (conto.getStato() == Conto.StatoConto.PAGATO) {
            throw new RuntimeException("Conto già pagato");
        }
        if (conto.getRichiestaPagamento() == null) {
            throw new IllegalStateException(
                    "Il tavolo non ha ancora richiesto il conto né indicato il pagamento in cassa.");
        }
        conto.setStato(Conto.StatoConto.PAGATO);
        conto.setDataChiusura(LocalDateTime.now());

        for (Ordine ordine : conto.getOrdini()) {
            if (ordine.getStato() != Ordine.StatoOrdine.PAGATO) {
                ordine.setStato(Ordine.StatoOrdine.PAGATO);
            }
        }
        ordineRepository.saveAll(conto.getOrdini());

        Utente tavolo = conto.getTavolo();
        tavolo.setContoAttivo(null);
        utenteRepository.save(tavolo);

        ContoDTO dto = ContoMapper.toDTO(conto);
        messagingTemplate.convertAndSend("/topic/conti", dto);
        return dto;
    }

    @Transactional(readOnly = true)
    public List<ContoDTO> getContiAttivi() {
        return contoRepository.findAttiviWithTavolo().stream()
                .filter(c -> (c.getTotale() != null && c.getTotale().signum() > 0)
                        || (c.getTotaleFisso() != null && c.getTotaleFisso().signum() > 0)
                        || (c.getOrdini() != null && !c.getOrdini().isEmpty()))
                .map(this::contoToDtoConOrdini)
                .toList();
    }

    private ContoDTO contoToDtoConOrdini(Conto conto) {
        List<com.example.demo.dto.OrdineDTO> ordini = ordineRepository.findByContoIdWithDettagli(conto.getId()).stream()
                .filter(Objects::nonNull)
                .collect(Collectors.toMap(Ordine::getId, o -> o, (a, b) -> a, LinkedHashMap::new))
                .values().stream()
                .map(com.example.demo.mapper.OrdineMapper::toDTO)
                .toList();
        return ContoDTO.builder()
                .id(conto.getId())
                .tavoloId(conto.getTavolo().getId())
                .numeroTavolo(conto.getTavolo().getNumeroTavolo())
                .totale(conto.getTotale())
                .tipoMenu(conto.getTipoMenu())
                .numeroPersone(conto.getNumeroPersone())
                .tipoPasto(conto.getTipoPasto())
                .prezzoPerPersona(conto.getPrezzoPerPersona())
                .totaleFisso(conto.getTotaleFisso())
                .stato(conto.getStato())
                .richiestaPagamento(conto.getRichiestaPagamento())
                .dataApertura(conto.getDataApertura())
                .dataChiusura(conto.getDataChiusura())
                .ordini(ordini)
                .build();
    }

    @Transactional(readOnly = true)
    public ContoDTO getContoAttivo(Long tavoloId) {
        return contoRepository.findByTavoloIdAndStatoNot(tavoloId, Conto.StatoConto.PAGATO)
                .map(ContoMapper::toDTO)
                .orElse(null); // nessun conto = tavolo libero, totale 0
    }
}