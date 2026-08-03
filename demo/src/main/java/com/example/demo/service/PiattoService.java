package com.example.demo.service;

import com.example.demo.dto.PiattoDTO;
import com.example.demo.dto.PiattoRequestDTO;
import com.example.demo.mapper.PiattoMapper;
import com.example.demo.model.Piatto;
import com.example.demo.repository.PiattoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class PiattoService {

    private final PiattoRepository piattoRepository;

    @Transactional(readOnly = true)
    public List<PiattoDTO> getAllPiatti(String categoria, Boolean isAllYouCanEat, Boolean soloDisponibili) {
        List<Piatto> piatti;

        if (soloDisponibili != null && soloDisponibili) {
            if (categoria != null) {
                piatti = piattoRepository.findByCategoriaAndDisponibileTrue(categoria);
            } else if (isAllYouCanEat != null) {
                piatti = piattoRepository.findByIsAllYouCanEatAndDisponibileTrue(isAllYouCanEat);
            } else {
                piatti = piattoRepository.findByDisponibileTrue();
            }
        } else {
            piatti = piattoRepository.findAll();
        }

        return piatti.stream()
                .map(PiattoMapper::toDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public PiattoDTO getPiattoById(Long id) {
        Piatto piatto = piattoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + id));
        return PiattoMapper.toDTO(piatto);
    }

    @Transactional(readOnly = true)
    public PiattoDTO getPiattoByCodice(String codicePiatto) {
        Piatto piatto = piattoRepository.findByCodicePiatto(codicePiatto)
                .orElseThrow(() -> new RuntimeException("Piatto non trovato con codice: " + codicePiatto));
        return PiattoMapper.toDTO(piatto);
    }

    public PiattoDTO creaPiatto(PiattoRequestDTO dto) {
        Piatto piatto = PiattoMapper.toEntity(dto);
        Piatto salvato = piattoRepository.save(piatto);
        return PiattoMapper.toDTO(salvato);
    }

    public PiattoDTO aggiornaPiatto(Long id, PiattoRequestDTO dto) {
        Piatto piatto = piattoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + id));
        PiattoMapper.updateEntity(piatto, dto);
        Piatto aggiornato = piattoRepository.save(piatto);
        return PiattoMapper.toDTO(aggiornato);
    }

    public PiattoDTO cambiaDisponibilita(Long id, Boolean disponibile) {
        Piatto piatto = piattoRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + id));
        piatto.setDisponibile(disponibile);
        Piatto aggiornato = piattoRepository.save(piatto);
        return PiattoMapper.toDTO(aggiornato);
    }

    public void eliminaPiatto(Long id) {
        if (!piattoRepository.existsById(id)) {
            throw new RuntimeException("Piatto non trovato con id: " + id);
        }
        piattoRepository.deleteById(id);
    }
}
