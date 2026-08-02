package com.example.demo.mapper;

import com.example.demo.dto.CarrelloItemDTO;
import com.example.demo.dto.CarrelloItemRequestDTO;
import com.example.demo.model.CarrelloItem;
import com.example.demo.model.Piatto;
import com.example.demo.model.Tavolo;

import java.math.BigDecimal;

public class CarrelloItemMapper {

    private CarrelloItemMapper() {
    }

    public static CarrelloItemDTO toDTO(CarrelloItem item) {
        if (item == null) {
            return null;
        }
        BigDecimal subtotale = (item.getPiatto() != null && item.getPiatto().getPrezzo() != null)
                ? item.getPiatto().getPrezzo().multiply(BigDecimal.valueOf(item.getQuantita()))
                : BigDecimal.ZERO;

        return CarrelloItemDTO.builder()
                .id(item.getId())
                .tavoloId(item.getTavolo() != null ? item.getTavolo().getId() : null)
                .piatto(PiattoMapper.toDTO(item.getPiatto()))
                .quantita(item.getQuantita())
                .note(item.getNote())
                .subtotale(subtotale)
                .build();
    }

    /**
     * @param dto    dati della richiesta
     * @param tavolo entità Tavolo già risolta dal service tramite dto.getTavoloId()
     * @param piatto entità Piatto già risolta dal service tramite dto.getPiattoId()
     */
    public static CarrelloItem toEntity(CarrelloItemRequestDTO dto, Tavolo tavolo, Piatto piatto) {
        if (dto == null) {
            return null;
        }
        return CarrelloItem.builder()
                .tavolo(tavolo)
                .piatto(piatto)
                .quantita(dto.getQuantita())
                .note(dto.getNote())
                .build();
    }

    public static void updateEntity(CarrelloItem item, CarrelloItemRequestDTO dto, Piatto piatto) {
        if (item == null || dto == null) {
            return;
        }
        item.setPiatto(piatto);
        item.setQuantita(dto.getQuantita());
        item.setNote(dto.getNote());
    }
}
