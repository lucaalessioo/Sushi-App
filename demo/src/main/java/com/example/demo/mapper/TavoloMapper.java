package com.example.demo.mapper;

import com.example.demo.dto.TavoloDTO;
import com.example.demo.dto.TavoloRequestDTO;
import com.example.demo.model.Tavolo;

public class TavoloMapper {

    private TavoloMapper() {
    }

    public static TavoloDTO toDTO(Tavolo tavolo) {
        if (tavolo == null) {
            return null;
        }
        return TavoloDTO.builder()
                .id(tavolo.getId())
                .numeroTavolo(tavolo.getNumeroTavolo())
                .sala(tavolo.getSala())
                .postiASedere(tavolo.getPostiASedere())
                .stato(tavolo.getStato())
                .build();
    }

    public static Tavolo toEntity(TavoloRequestDTO dto) {
        if (dto == null) {
            return null;
        }
        return Tavolo.builder()
                .numeroTavolo(dto.getNumeroTavolo())
                .sala(dto.getSala())
                .postiASedere(dto.getPostiASedere())
                .stato(dto.getStato())
                .build();
    }

    /**
     * Aggiorna un'entità Tavolo esistente con i valori del DTO (per update in-place, es. via JPA merge).
     */
    public static void updateEntity(Tavolo tavolo, TavoloRequestDTO dto) {
        if (tavolo == null || dto == null) {
            return;
        }
        tavolo.setNumeroTavolo(dto.getNumeroTavolo());
        tavolo.setSala(dto.getSala());
        tavolo.setPostiASedere(dto.getPostiASedere());
        if (dto.getStato() != null) {
            tavolo.setStato(dto.getStato());
        }
    }
}
