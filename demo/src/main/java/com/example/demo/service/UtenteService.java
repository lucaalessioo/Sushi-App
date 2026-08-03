package com.example.demo.service;

import com.example.demo.dto.UtenteDTO;
import com.example.demo.dto.UtenteRequestDTO;
import com.example.demo.mapper.UtenteMapper;
import com.example.demo.model.Tavolo;
import com.example.demo.model.Utente;
import com.example.demo.repository.TavoloRepository;
import com.example.demo.repository.UtenteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UtenteService {

    private final UtenteRepository utenteRepository;
    private final TavoloRepository tavoloRepository;
    private final PasswordEncoder passwordEncoder;

    @Transactional(readOnly = true)
    public List<UtenteDTO> getAllUtenti() {
        return utenteRepository.findAll().stream()
                .map(UtenteMapper::toDTO)
                .toList();
    }

    @Transactional(readOnly = true)
    public UtenteDTO getUtenteById(Long id) {
        Utente utente = utenteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utente non trovato con id: " + id));
        return UtenteMapper.toDTO(utente);
    }

    public UtenteDTO creaUtente(UtenteRequestDTO dto) {
        Tavolo tavolo = null;
        if (dto.getTavoloId() != null) {
            tavolo = tavoloRepository.findById(dto.getTavoloId())
                    .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + dto.getTavoloId()));
        }

        Utente utente = UtenteMapper.toEntity(dto, tavolo);
        utente.setPassword(passwordEncoder.encode(dto.getPassword()));

        return UtenteMapper.toDTO(utenteRepository.save(utente));
    }

    public UtenteDTO aggiornaUtente(Long id, UtenteRequestDTO dto) {
        Utente utente = utenteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utente non trovato con id: " + id));

        Tavolo tavolo = null;
        if (dto.getTavoloId() != null) {
            tavolo = tavoloRepository.findById(dto.getTavoloId())
                    .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + dto.getTavoloId()));
        }

        UtenteMapper.updateEntity(utente, dto, tavolo);

        if (dto.getPassword() != null && !dto.getPassword().isBlank()) {
            utente.setPassword(passwordEncoder.encode(dto.getPassword()));
        }

        return UtenteMapper.toDTO(utenteRepository.save(utente));
    }

    public void eliminaUtente(Long id) {
        if (!utenteRepository.existsById(id)) {
            throw new RuntimeException("Utente non trovato con id: " + id);
        }
        utenteRepository.deleteById(id);
    }
}