package com.example.demo.mapper;

import org.springframework.stereotype.Component;

import com.example.demo.dto.TavoloDTO;
import com.example.demo.model.Tavolo;
import com.example.demo.model.Tavolo.StatoTavolo;

@Component
public class TavoloMapper {

    public TavoloDTO toDto(Tavolo entity) {
        if (entity == null) return null;
        TavoloDTO dto = new TavoloDTO();
        dto.setId(entity.getId());
        dto.setNumero(entity.getNumero());
        dto.setSala(entity.getSala());
        dto.setPosti(entity.getPosti());
        dto.setX(entity.getX());
        dto.setY(entity.getY());
        dto.setStato(entity.getStato());
        return dto;
    }

    public Tavolo toEntity(TavoloDTO dto) {
        if (dto == null) return null;
        Tavolo entity = new Tavolo();
        entity.setId(dto.getId());
        entity.setNumero(dto.getNumero());
        entity.setSala(dto.getSala());
        entity.setPosti(dto.getPosti());
        entity.setX(dto.getX());
        entity.setY(dto.getY());
        entity.setStato(dto.getStato() != null ? dto.getStato() : StatoTavolo.LIBERO);
        return entity;
    }
}
