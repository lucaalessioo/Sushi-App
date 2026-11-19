package com.example.demo.service;

import com.example.demo.dto.RecensioneRequestDTO;
import com.example.demo.dto.RecensioneResponseDTO;
import com.example.demo.mapper.RecensioneMapper;
import com.example.demo.model.Recensione;
import com.example.demo.repository.RecensioneRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RecensioneService {

    private final RecensioneRepository recensioneRepository;

    public RecensioneResponseDTO crea(RecensioneRequestDTO dto) {
        Recensione salvata = recensioneRepository.save(RecensioneMapper.toEntity(dto));
        return RecensioneMapper.toDTO(salvata);
    }

    @Transactional(readOnly = true)
    public List<RecensioneResponseDTO> listAll() {
        return recensioneRepository.findAllWithPiatti().stream()
                .map(RecensioneMapper::toDTO)
                .toList();
    }
}