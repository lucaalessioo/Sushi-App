package com.example.demo.mapper;

import com.example.demo.dto.OrdineDTO;
import com.example.demo.model.Ordine;

import java.util.Collections;
import java.util.List;

public class OrdineMapper {

    private OrdineMapper() {
    }

    public static OrdineDTO toDTO(Ordine ordine) {
        if (ordine == null) {
            return null;
        }
        List<com.example.demo.dto.DettaglioOrdineDTO> dettagli = ordine.getDettagli() != null
                ? ordine.getDettagli().stream()
                    .map(DettaglioOrdineMapper::toDTO)
                    .toList()
                : Collections.emptyList();

        return OrdineDTO.builder()
                .id(ordine.getId())
                .tavolo(TavoloMapper.toDTO(ordine.getTavolo()))
                .totale(ordine.getTotale())
                .stato(ordine.getStato())
                .dataOra(ordine.getDataOra())
                .dettagli(dettagli)
                .build();
    }

    // NB: la creazione dell'entità Ordine a partire da OrdineRequestDTO non è
    // un semplice mapping 1:1 (richiede il calcolo del totale, la risoluzione
    // dei Piatti tramite repository e la creazione dei singoli DettaglioOrdine
    // tramite DettaglioOrdineMapper): è quindi gestita direttamente nel service
    // (es. OrdineService.creaOrdine(OrdineRequestDTO dto)), non nel mapper.
}
