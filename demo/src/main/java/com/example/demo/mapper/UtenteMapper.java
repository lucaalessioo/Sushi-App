package com.example.demo.mapper;

import com.example.demo.dto.UtenteDTO;
import com.example.demo.dto.UtenteRequestDTO;
import com.example.demo.model.Tavolo;
import com.example.demo.model.Utente;

public class UtenteMapper {

    private UtenteMapper() {
    }

    public static UtenteDTO toDTO(Utente utente) {
        if (utente == null) {
            return null;
        }
        return UtenteDTO.builder()
                .id(utente.getId())
                .nome(utente.getNome())
                .tavolo(TavoloMapper.toDTO(utente.getTavolo()))
                .ruolo(utente.getRuolo())
                .dataCreazione(utente.getDataCreazione())
                .build();
    }

    /**
     * Crea una nuova entità Utente a partire dal DTO di richiesta.
     * NB: la password qui è ancora in chiaro: deve essere criptata (es. con
     * PasswordEncoder) nel service PRIMA del salvataggio.
     *
     * @param dto     dati della richiesta
     * @param tavolo  entità Tavolo già risolta dal service tramite dto.getTavoloId() (può essere null)
     */
    public static Utente toEntity(UtenteRequestDTO dto, Tavolo tavolo) {
        if (dto == null) {
            return null;
        }
        return Utente.builder()
                .nome(dto.getNome())
                .password(dto.getPassword())
                .tavolo(tavolo)
                .ruolo(dto.getRuolo())
                .build();
    }

    public static void updateEntity(Utente utente, UtenteRequestDTO dto, Tavolo tavolo) {
        if (utente == null || dto == null) {
            return;
        }
        utente.setNome(dto.getNome());
        utente.setTavolo(tavolo);
        if (dto.getRuolo() != null) {
            utente.setRuolo(dto.getRuolo());
        }
        // La password, se presente nel DTO, va criptata e impostata dal service.
    }
}
