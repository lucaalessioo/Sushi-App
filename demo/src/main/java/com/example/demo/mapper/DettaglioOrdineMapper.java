package com.example.demo.mapper;

import com.example.demo.dto.DettaglioOrdineDTO;
import com.example.demo.model.DettaglioOrdine;
import com.example.demo.model.Ordine;
import com.example.demo.model.Piatto;

import java.math.BigDecimal;

public class DettaglioOrdineMapper {

    private DettaglioOrdineMapper() {
    }

    public static DettaglioOrdineDTO toDTO(DettaglioOrdine dettaglio) {
        if (dettaglio == null) {
            return null;
        }
        BigDecimal subtotale = (dettaglio.getPrezzoUnitario() != null && dettaglio.getQuantita() != null)
                ? dettaglio.getPrezzoUnitario().multiply(BigDecimal.valueOf(dettaglio.getQuantita()))
                : BigDecimal.ZERO;

        return DettaglioOrdineDTO.builder()
                .id(dettaglio.getId())
                .piatto(PiattoMapper.toDTO(dettaglio.getPiatto()))
                .quantita(dettaglio.getQuantita())
                .prezzoUnitario(dettaglio.getPrezzoUnitario())
                .subtotale(subtotale)
                .build();
    }

    /**
     * Crea un DettaglioOrdine a partire da un Piatto e una quantità.
     * Il prezzoUnitario viene "fotografato" dal prezzo corrente del piatto,
     * così eventuali modifiche future al prezzo non alterano ordini già emessi.
     *
     * @param ordine   ordine padre a cui associare il dettaglio
     * @param piatto   entità Piatto già risolta dal service
     * @param quantita quantità richiesta
     */
    public static DettaglioOrdine toEntity(Ordine ordine, Piatto piatto, Integer quantita) {
        if (piatto == null || quantita == null) {
            return null;
        }
        return DettaglioOrdine.builder()
                .ordine(ordine)
                .piatto(piatto)
                .quantita(quantita)
                .prezzoUnitario(piatto.getPrezzo())
                .build();
    }
}
