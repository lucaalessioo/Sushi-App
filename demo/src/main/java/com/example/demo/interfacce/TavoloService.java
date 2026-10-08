package com.example.demo.interfacce;

import java.util.List;

import com.example.demo.dto.PosizioneTavoloDTO;
import com.example.demo.dto.TavoloDTO;
import com.example.demo.model.Tavolo.StatoTavolo;

public interface TavoloService {
    List<TavoloDTO> getAllTavoli();
    TavoloDTO createTavolo(TavoloDTO dto);
    TavoloDTO updateTavolo(Long id, TavoloDTO dto);
    TavoloDTO updatePosizione(Long id, PosizioneTavoloDTO posizioneDTO);
    TavoloDTO updateStato(Long id, StatoTavolo stato);
    void deleteTavolo(Long id);
}
