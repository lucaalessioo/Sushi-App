package com.example.demo.service;

import com.example.demo.dto.PiattoRequestDTO;
import com.example.demo.model.Piatto;
import com.example.demo.repository.PiattoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PiattoService {

    private final PiattoRepository piattoRepository;

    @Transactional
    public Piatto creaPiatto(PiattoRequestDTO dto) {

        if (dto.getCodicePiatto() != null &&
                !dto.getCodicePiatto().isBlank() &&
                piattoRepository.findByCodicePiatto(dto.getCodicePiatto()).isPresent()) {

            throw new IllegalArgumentException(
                    "Esiste già un piatto con codice: " + dto.getCodicePiatto());
        }

        Piatto piatto = Piatto.builder()
                .codicePiatto(dto.getCodicePiatto())
                .nome(dto.getNome())
                .descrizione(dto.getDescrizione())
                .prezzo(dto.getPrezzo())
                .immagineUrl(dto.getImmagineUrl())
                .disponibile(dto.getDisponibile() != null
                        ? dto.getDisponibile()
                        : true)
                .isAllYouCanEat(dto.getIsAllYouCanEat() != null
                        ? dto.getIsAllYouCanEat()
                        : true)
                .categoria(dto.getCategoria())
                .build();

        return piattoRepository.save(piatto);
    }

    public List<Piatto> getTutti() {
        return piattoRepository.findAll();
    }

    public List<Piatto> getDisponibili() {
        return piattoRepository.findByDisponibileTrue();
    }

    public List<Piatto> getAllYouCanEat() {
        return piattoRepository
                .findByIsAllYouCanEatTrueAndDisponibileTrue();
    }

    public List<Piatto> getAllaCarta() {
        return piattoRepository
                .findByIsAllYouCanEatFalseAndDisponibileTrue();
    }

    @Transactional
    public Piatto aggiornaPiatto(Long id, PiattoRequestDTO dto) {

        Piatto piatto = piattoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Piatto non trovato: " + id));

        piatto.setCodicePiatto(dto.getCodicePiatto());
        piatto.setNome(dto.getNome());
        piatto.setDescrizione(dto.getDescrizione());
        piatto.setPrezzo(dto.getPrezzo());
        piatto.setImmagineUrl(dto.getImmagineUrl());
        piatto.setDisponibile(dto.getDisponibile());
        piatto.setIsAllYouCanEat(dto.getIsAllYouCanEat());
        piatto.setCategoria(dto.getCategoria());

        return piattoRepository.save(piatto);
    }

    @Transactional
    public void eliminaPiatto(Long id) {

        if (!piattoRepository.existsById(id)) {
            throw new RuntimeException("Piatto non trovato: " + id);
        }

        piattoRepository.deleteById(id);
    }

    @Transactional
    public Piatto cambiaDisponibilita(Long id, Boolean disponibile) {

        Piatto piatto = piattoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Piatto non trovato: " + id));

        piatto.setDisponibile(disponibile);

        return piattoRepository.save(piatto);
    }
}