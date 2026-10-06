package com.example.demo.service;

import com.example.demo.dto.UtenteDTO;
import com.example.demo.dto.UtenteRequestDTO;
import com.example.demo.mapper.UtenteMapper;
import com.example.demo.model.Utente;
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
        validaNumeroTavolo(dto, null);

        Utente utente = UtenteMapper.toEntity(dto);
        utente.setPassword(passwordEncoder.encode(dto.getPassword()));

        return UtenteMapper.toDTO(utenteRepository.save(utente));
    }

    public UtenteDTO aggiornaUtente(Long id, UtenteRequestDTO dto) {
        Utente utente = utenteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Utente non trovato con id: " + id));

        validaNumeroTavolo(dto, id);

        UtenteMapper.updateEntity(utente, dto);

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

    // ---------- supporto ----------

    /**
     * Un tablet deve avere un numero di tavolo, e il numero deve essere unico.
     * 
     * @param idEsistente id dell'utente che si sta aggiornando (null in creazione)
     */
    private void validaNumeroTavolo(UtenteRequestDTO dto, Long idEsistente) {
        if (dto.getRuolo() == Utente.Ruolo.ROLE_TABLET && dto.getNumeroTavolo() == null) {
            throw new RuntimeException("Un tablet deve avere un numero di tavolo");
        }
        if (dto.getNumeroTavolo() != null) {
            boolean occupato = (idEsistente == null)
                    ? utenteRepository.existsByNumeroTavolo(dto.getNumeroTavolo())
                    : utenteRepository.existsByNumeroTavoloAndIdNot(dto.getNumeroTavolo(), idEsistente);
            if (occupato) {
                throw new RuntimeException("Il tavolo " + dto.getNumeroTavolo() + " esiste già");
            }
        }
    }
}