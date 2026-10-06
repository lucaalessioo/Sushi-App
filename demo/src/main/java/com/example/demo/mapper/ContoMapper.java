package com.example.demo.mapper;

import com.example.demo.dto.ContoDTO;
import com.example.demo.model.Conto;

public class ContoMapper {
    private ContoMapper() {
    }

    public static ContoDTO toDTO(Conto c) {
        if (c == null)
            return null;
        return ContoDTO.builder()
                .id(c.getId())
                .tavoloId(c.getTavolo().getId())
                .numeroTavolo(c.getTavolo().getNumeroTavolo())
                .totale(c.getTotale())
                .stato(c.getStato())
                .dataApertura(c.getDataApertura())
                .dataChiusura(c.getDataChiusura())
                .ordini(c.getOrdini().stream().map(OrdineMapper::toDTO).toList())
                .build();
    }
}
