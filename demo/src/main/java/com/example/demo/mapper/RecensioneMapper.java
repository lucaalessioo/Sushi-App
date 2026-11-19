package com.example.demo.mapper;

import com.example.demo.dto.*;
import com.example.demo.model.Recensione;
import com.example.demo.model.RecensionePiatto;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

public final class RecensioneMapper {

    private RecensioneMapper() {
    }

    public static Recensione toEntity(RecensioneRequestDTO dto) {
        Recensione r = Recensione.builder()
                .tavoloId(dto.getTavoloId())
                .numeroTavolo(dto.getNumeroTavolo())
                .nomeCliente(dto.getNomeCliente() != null && !dto.getNomeCliente().isBlank()
                        ? dto.getNomeCliente().trim()
                        : "Cliente")
                .overallRating(dto.getOverallRating())
                .comment(dto.getComment())
                .tags(tagsToString(dto.getTags()))
                .build();

        if (dto.getDishRatings() != null) {
            for (ValutazionePiattoRequestDTO vp : dto.getDishRatings()) {
                if (vp.getRating() == null || vp.getRating() < 1) {
                    continue;
                }
                RecensionePiatto piatto = RecensionePiatto.builder()
                        .recensione(r)
                        .piattoId(vp.getPiattoId())
                        .nomePiatto(vp.getNomePiatto())
                        .immagineUrl(vp.getImmagineUrl())
                        .rating(vp.getRating())
                        .build();
                r.getValutazioniPiatti().add(piatto);
            }
        }
        return r;
    }

    public static RecensioneResponseDTO toDTO(Recensione r) {
        return RecensioneResponseDTO.builder()
                .id(r.getId())
                .tavoloId(r.getTavoloId())
                .numeroTavolo(r.getNumeroTavolo())
                .nomeCliente(r.getNomeCliente())
                .overallRating(r.getOverallRating())
                .comment(r.getComment())
                .tags(stringToTags(r.getTags()))
                .dishRatings(r.getValutazioniPiatti() == null ? List.of() : r.getValutazioniPiatti().stream()
                        .map(p -> ValutazionePiattoResponseDTO.builder()
                                .piattoId(p.getPiattoId())
                                .nomePiatto(p.getNomePiatto())
                                .immagineUrl(p.getImmagineUrl())
                                .rating(p.getRating())
                                .build())
                        .toList())
                .dataCreazione(r.getDataCreazione())
                .build();
    }

    private static String tagsToString(List<String> tags) {
        if (tags == null || tags.isEmpty()) {
            return null;
        }
        return tags.stream().map(String::trim).filter(s -> !s.isEmpty()).collect(Collectors.joining(","));
    }

    private static List<String> stringToTags(String tags) {
        if (tags == null || tags.isBlank()) {
            return Collections.emptyList();
        }
        return Arrays.stream(tags.split(","))
                .map(String::trim)
                .filter(s -> !s.isEmpty())
                .toList();
    }
}