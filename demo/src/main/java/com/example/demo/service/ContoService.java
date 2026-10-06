package com.example.demo.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.ContoDTO;
import com.example.demo.mapper.ContoMapper;
import com.example.demo.model.Conto;
import com.example.demo.model.Utente;
import com.example.demo.repository.ContoRepository;
import com.example.demo.repository.UtenteRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Transactional
public class ContoService {

    private final ContoRepository contoRepository;
    private final UtenteRepository utenteRepository;

    // Il tablet preme "Termina e paga"
    public ContoDTO richiediPagamento(Long tavoloId) {
        Conto conto = contoRepository.findByTavoloIdAndStato(tavoloId, Conto.StatoConto.APERTO)
                .orElseThrow(() -> new RuntimeException("Nessun conto aperto per il tavolo " + tavoloId));
        conto.setStato(Conto.StatoConto.IN_PAGAMENTO);
        return ContoMapper.toDTO(conto);
    }

    @Transactional(readOnly = true)
    public List<ContoDTO> getContiInPagamento() {
        return contoRepository.findByStato(Conto.StatoConto.IN_PAGAMENTO).stream()
                .map(ContoMapper::toDTO).toList();
    }

    // La cassa conferma l'incasso
    public ContoDTO confermaPagamento(Long contoId) {
        Conto conto = contoRepository.findById(contoId)
                .orElseThrow(() -> new RuntimeException("Conto non trovato con id: " + contoId));
        if (conto.getStato() == Conto.StatoConto.PAGATO) {
            throw new RuntimeException("Conto già pagato");
        }
        conto.setStato(Conto.StatoConto.PAGATO);
        conto.setDataChiusura(LocalDateTime.now());

        Utente tavolo = conto.getTavolo();
        tavolo.setContoAttivo(null);
        utenteRepository.save(tavolo);

        return ContoMapper.toDTO(conto);
    }

    @Transactional(readOnly = true)
    public ContoDTO getContoAttivo(Long tavoloId) {
        return contoRepository.findByTavoloIdAndStatoNot(tavoloId, Conto.StatoConto.PAGATO)
                .map(ContoMapper::toDTO)
                .orElse(null); // nessun conto = tavolo libero, totale 0
    }
}