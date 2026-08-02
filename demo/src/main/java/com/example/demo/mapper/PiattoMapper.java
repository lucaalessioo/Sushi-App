package com.example.demo.mapper;

import com.example.demo.dto.PiattoDTO;
import com.example.demo.dto.PiattoRequestDTO;
import com.example.demo.model.Piatto;

public class PiattoMapper {

    private PiattoMapper() {
    }

    public static PiattoDTO toDTO(Piatto piatto) {
        if (piatto == null) {
            return null;
        }
        return PiattoDTO.builder()
                .id(piatto.getId())
                .codicePiatto(piatto.getCodicePiatto())
                .nome(piatto.getNome())
                .descrizione(piatto.getDescrizione())
                .prezzo(piatto.getPrezzo())
                .immagineUrl(piatto.getImmagineUrl())
                .disponibile(piatto.getDisponibile())
                .isAllYouCanEat(piatto.getIsAllYouCanEat())
                .categoria(piatto.getCategoria())
                .build();
    }

    public static Piatto toEntity(PiattoRequestDTO dto) {
        if (dto == null) {
            return null;
        }
        return Piatto.builder()
                .codicePiatto(dto.getCodicePiatto())
                .nome(dto.getNome())
                .descrizione(dto.getDescrizione())
                .prezzo(dto.getPrezzo())
                .immagineUrl(dto.getImmagineUrl())
                .disponibile(dto.getDisponibile())
                .isAllYouCanEat(dto.getIsAllYouCanEat())
                .categoria(dto.getCategoria())
                .build();
    }

    public static void updateEntity(Piatto piatto, PiattoRequestDTO dto) {
        if (piatto == null || dto == null) {
            return;
        }
        piatto.setCodicePiatto(dto.getCodicePiatto());
        piatto.setNome(dto.getNome());
        piatto.setDescrizione(dto.getDescrizione());
        piatto.setPrezzo(dto.getPrezzo());
        piatto.setImmagineUrl(dto.getImmagineUrl());
        if (dto.getDisponibile() != null) {
            piatto.setDisponibile(dto.getDisponibile());
        }
        if (dto.getIsAllYouCanEat() != null) {
            piatto.setIsAllYouCanEat(dto.getIsAllYouCanEat());
        }
        piatto.setCategoria(dto.getCategoria());
    }
}
