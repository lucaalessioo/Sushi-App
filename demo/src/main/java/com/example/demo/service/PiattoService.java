package com.example.demo.service;

import com.example.demo.dto.PiattoRequestDTO;
import com.example.demo.mapper.PiattoMapper;
import com.example.demo.model.Piatto;
import com.example.demo.repository.PiattoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class PiattoService {

    private final PiattoRepository piattoRepository;
    private final ImmagineStorageService immagineStorage;

    @Transactional
    public Piatto creaPiatto(PiattoRequestDTO dto) {
        normalizza(dto);
        verificaCodiceUnivoco(dto.getCodicePiatto(), null);
        return piattoRepository.save(PiattoMapper.toEntity(dto));
    }

    @Transactional
    public Piatto aggiornaPiatto(Long id, PiattoRequestDTO dto) {
        Piatto piatto = trova(id);
        normalizza(dto);
        verificaCodiceUnivoco(dto.getCodicePiatto(), id);

        String vecchiaImmagine = piatto.getImmagineUrl();
        PiattoMapper.updateEntity(piatto, dto);
        Piatto salvato = piattoRepository.save(piatto);

        // se la foto è cambiata o è stata rimossa, cancello il vecchio file
        if (!Objects.equals(vecchiaImmagine, salvato.getImmagineUrl())) {
            immagineStorage.elimina(vecchiaImmagine);
        }
        return salvato;
    }

    @Transactional
    public void eliminaPiatto(Long id) {
        Piatto piatto = trova(id);
        piattoRepository.delete(piatto);
        immagineStorage.elimina(piatto.getImmagineUrl());
    }

    @Transactional
    public Piatto cambiaDisponibilita(Long id, Boolean disponibile) {
        Piatto piatto = trova(id);
        piatto.setDisponibile(disponibile);
        return piattoRepository.save(piatto);
    }

    public List<Piatto> getTutti() {
        return piattoRepository.findAll();
    }

    public List<Piatto> getDisponibili() {
        return piattoRepository.findByDisponibileTrue();
    }

    public List<Piatto> getAllYouCanEat() {
        return piattoRepository.findByIsAllYouCanEatTrueAndDisponibileTrue();
    }

    public List<Piatto> getAllaCarta() {
        return piattoRepository.findByIsAllYouCanEatFalseAndDisponibileTrue();
    }

    // ---------- helper ----------

    private Piatto trova(Long id) {
        return piattoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND, "Piatto non trovato: " + id));
    }

    /** Stringhe vuote -> null: due codici "" violerebbero il vincolo unique. */
    private void normalizza(PiattoRequestDTO dto) {
        if (dto.getCodicePiatto() != null && dto.getCodicePiatto().isBlank()) {
            dto.setCodicePiatto(null);
        }
        if (dto.getImmagineUrl() != null && dto.getImmagineUrl().isBlank()) {
            dto.setImmagineUrl(null);
        }
    }

    private void verificaCodiceUnivoco(String codice, Long idCorrente) {
        if (codice == null) {
            return;
        }
        piattoRepository.findByCodicePiatto(codice)
                .filter(esistente -> !esistente.getId().equals(idCorrente))
                .ifPresent(esistente -> {
                    throw new IllegalArgumentException("Esiste già un piatto con codice: " + codice);
                });
    }
}
