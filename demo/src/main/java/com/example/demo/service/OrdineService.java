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

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class OrdineService {

    private final OrdineRepository ordineRepository;
    private final TavoloRepository tavoloRepository;
    private final PiattoRepository piattoRepository;
    private final CarrelloItemRepository carrelloItemRepository;

    public OrdineDTO creaOrdine(OrdineRequestDTO dto) {
        Tavolo tavolo = tavoloRepository.findById(dto.getTavoloId())
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + dto.getTavoloId()));

        Ordine ordine = Ordine.builder()
                .tavolo(tavolo)
                .stato(Ordine.StatoOrdine.IN_INVIATO)
                .totale(BigDecimal.ZERO)
                .dettagli(new ArrayList<>())
                .build();

        BigDecimal totaleCalcolato = BigDecimal.ZERO;

        for (DettaglioOrdineRequestDTO reqDettaglio : dto.getDettagli()) {
            Piatto piatto = piattoRepository.findById(reqDettaglio.getPiattoId())
                    .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + reqDettaglio.getPiattoId()));

            DettaglioOrdine dettaglio = DettaglioOrdineMapper.toEntity(ordine, piatto, reqDettaglio.getQuantita());
            ordine.getDettagli().add(dettaglio);

            BigDecimal subtotale = dettaglio.getPrezzoUnitario().multiply(BigDecimal.valueOf(dettaglio.getQuantita()));
            totaleCalcolato = totaleCalcolato.add(subtotale);
        }

        ordine.setTotale(totaleCalcolato);
        return OrdineMapper.toDTO(ordineRepository.save(ordine));
    }

    public OrdineDTO creaOrdineDaCarrello(Long tavoloId) {
        Tavolo tavolo = tavoloRepository.findById(tavoloId)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + tavoloId));

        List<CarrelloItem> carrelloItems = carrelloItemRepository.findByTavoloId(tavoloId);
        if (carrelloItems.isEmpty()) {
            throw new RuntimeException("Impossibile creare l'ordine: il carrello è vuoto.");
        }

        Ordine ordine = Ordine.builder()
                .tavolo(tavolo)
                .stato(Ordine.StatoOrdine.IN_INVIATO)
                .totale(BigDecimal.ZERO)
                .dettagli(new ArrayList<>())
                .build();

        BigDecimal totaleCalcolato = BigDecimal.ZERO;

        for (CarrelloItem item : carrelloItems) {
            DettaglioOrdine dettaglio = DettaglioOrdineMapper.toEntity(ordine, item.getPiatto(), item.getQuantita());
            ordine.getDettagli().add(dettaglio);

            BigDecimal subtotale = dettaglio.getPrezzoUnitario().multiply(BigDecimal.valueOf(dettaglio.getQuantita()));
            totaleCalcolato = totaleCalcolato.add(subtotale);
        }

        ordine.setTotale(totaleCalcolato);
        Ordine salvato = ordineRepository.save(ordine);

        carrelloItemRepository.deleteByTavoloId(tavoloId);

        return OrdineMapper.toDTO(salvato);
    }

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
        return OrdineMapper.toDTO(ordineRepository.save(ordine));
    }
}
