package com.example.demo.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.PosizioneTavoloDTO;
import com.example.demo.dto.TavoloDTO;
import com.example.demo.interfacce.TavoloService;
import com.example.demo.mapper.TavoloMapper;
import com.example.demo.model.Tavolo;
import com.example.demo.model.Tavolo.StatoTavolo;
import com.example.demo.repository.TavoloRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class TavoloServiceImpl implements TavoloService {

    private final TavoloRepository tavoloRepository;
    private final TavoloMapper tavoloMapper;

    @Override
    @Transactional(readOnly = true)
    public List<TavoloDTO> getAllTavoli() {
        return tavoloRepository.findAll()
                .stream()
                .map(tavoloMapper::toDto)
                .collect(Collectors.toList());
    }

    @Override
    @Transactional
    public TavoloDTO createTavolo(TavoloDTO dto) {
        if (tavoloRepository.existsByNumero(dto.getNumero())) {
            throw new IllegalArgumentException("Esiste già un tavolo con numero: " + dto.getNumero());
        }
        Tavolo tavolo = tavoloMapper.toEntity(dto);
        Tavolo salvato = tavoloRepository.save(tavolo);
        return tavoloMapper.toDto(salvato);
    }

    @Override
    @Transactional
    public TavoloDTO updateTavolo(Long id, TavoloDTO dto) {
        Tavolo tavolo = tavoloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));

        tavolo.setNumero(dto.getNumero());
        tavolo.setSala(dto.getSala());
        tavolo.setPosti(dto.getPosti());
        if (dto.getStato() != null) tavolo.setStato(dto.getStato());

        return tavoloMapper.toDto(tavoloRepository.save(tavolo));
    }

    @Override
    @Transactional
    public TavoloDTO updatePosizione(Long id, PosizioneTavoloDTO posizioneDTO) {
        Tavolo tavolo = tavoloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));

        tavolo.setX(posizioneDTO.getX());
        tavolo.setY(posizioneDTO.getY());

        return tavoloMapper.toDto(tavoloRepository.save(tavolo));
    }

    @Override
    @Transactional
    public TavoloDTO updateStato(Long id, StatoTavolo stato) {
        Tavolo tavolo = tavoloRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + id));

        tavolo.setStato(stato);
        return tavoloMapper.toDto(tavoloRepository.save(tavolo));
    }

    @Override
    @Transactional
    public void deleteTavolo(Long id) {
        if (!tavoloRepository.existsById(id)) {
            throw new RuntimeException("Tavolo non trovato con id: " + id);
        }
        tavoloRepository.deleteById(id);
    }
}
