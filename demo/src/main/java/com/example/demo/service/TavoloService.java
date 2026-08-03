package com.example.demo.service;

import com.example.demo.dto.TavoloDTO;
import com.example.demo.dto.TavoloRequestDTO;
import com.example.demo.mapper.TavoloMapper;
import com.example.demo.model.Tavolo;
import com.example.demo.repository.TavoloRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TavoloService {

    private final TavoloRepository tavoloRepository;

    @Transactional(readOnly = true)
    public List<TavoloDTO> getAllTavoli() {
        return tavoloRepository.findAll().stream()
                .map(TavoloMapper::toDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public TavoloDTO getTavoloById(Long id) {
        Tavolo tavolo = tavoloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));
        return TavoloMapper.toDTO(tavolo);
    }

    public TavoloDTO creaTavolo(TavoloRequestDTO dto) {
        Tavolo tavolo = TavoloMapper.toEntity(dto);
        return TavoloMapper.toDTO(tavoloRepository.save(tavolo));
    }

    public TavoloDTO aggiornaTavolo(Long id, TavoloRequestDTO dto) {
        Tavolo tavolo = tavoloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));
        TavoloMapper.updateEntity(tavolo, dto);
        return TavoloMapper.toDTO(tavoloRepository.save(tavolo));
    }

    public TavoloDTO cambiaStatoTavolo(Long id, Tavolo.StatoTavolo stato) {
        Tavolo tavolo = tavoloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));
        tavolo.setStato(stato);
        return TavoloMapper.toDTO(tavoloRepository.save(tavolo));
    }

    public void eliminaTavolo(Long id) {
        if (!tavoloRepository.existsById(id)) {
            throw new RuntimeException("Tavolo non trovato con id: " + id);
        }
        tavoloRepository.deleteById(id);
    }
}