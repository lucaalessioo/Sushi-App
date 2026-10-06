package com.example.demo.mapper;

import com.example.demo.dto.UtenteDTO;
import com.example.demo.dto.UtenteRequestDTO;
import com.example.demo.model.Utente;

public class UtenteMapper {

    private UtenteMapper() {
    }

    public static UtenteDTO toDTO(Utente u) {
        if (u == null)
            return null;
        return UtenteDTO.builder()
                .id(u.getId())
                .nome(u.getNome())
                .numeroTavolo(u.getNumeroTavolo())
                .contoAttivoId(u.getContoAttivo() != null ? u.getContoAttivo().getId() : null)
                .ruolo(u.getRuolo())
                .dataCreazione(u.getDataCreazione())
                .build();
    }

    public static Utente toEntity(UtenteRequestDTO dto) {
        if (dto == null)
            return null;
        return Utente.builder()
                .nome(dto.getNome())
                .password(dto.getPassword()) // da criptare nel service
                .numeroTavolo(dto.getNumeroTavolo())
                .ruolo(dto.getRuolo())
                .build();
    }

    public static void updateEntity(Utente u, UtenteRequestDTO dto) {
        if (u == null || dto == null)
            return;
        u.setNome(dto.getNome());
        u.setNumeroTavolo(dto.getNumeroTavolo());
        if (dto.getRuolo() != null)
            u.setRuolo(dto.getRuolo());
    }
}
