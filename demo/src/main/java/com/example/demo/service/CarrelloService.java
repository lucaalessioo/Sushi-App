package com.example.demo.service;

import com.example.demo.dto.CarrelloItemDTO;
import com.example.demo.dto.CarrelloItemRequestDTO;
import com.example.demo.mapper.CarrelloItemMapper;
import com.example.demo.model.CarrelloItem;
import com.example.demo.model.Piatto;
import com.example.demo.model.Tavolo;
import com.example.demo.repository.CarrelloItemRepository;
import com.example.demo.repository.PiattoRepository;
import com.example.demo.repository.TavoloRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class CarrelloService {

    private final CarrelloItemRepository carrelloItemRepository;
    private final TavoloRepository tavoloRepository;
    private final PiattoRepository piattoRepository;

    @Transactional(readOnly = true)
    public List<CarrelloItemDTO> getCarrelloByTavolo(Long tavoloId) {
        return carrelloItemRepository.findByTavoloId(tavoloId).stream()
                .map(CarrelloItemMapper::toDTO)
                .toList();
    }

    public CarrelloItemDTO aggiungiItem(CarrelloItemRequestDTO dto) {
        Tavolo tavolo = tavoloRepository.findById(dto.getTavoloId())
                .orElseThrow(() -> new RuntimeException("Tavolo non trovato con id: " + dto.getTavoloId()));

        Piatto piatto = piattoRepository.findById(dto.getPiattoId())
                .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + dto.getPiattoId()));

        Optional<CarrelloItem> esistente = carrelloItemRepository.findByTavoloIdAndPiattoId(dto.getTavoloId(), dto.getPiattoId());

        CarrelloItem item;
        if (esistente.isPresent()) {
            item = esistente.get();
            item.setQuantita(item.getQuantita() + dto.getQuantita());
            if (dto.getNote() != null && !dto.getNote().isBlank()) {
                item.setNote(dto.getNote());
            }
        } else {
            item = CarrelloItemMapper.toEntity(dto, tavolo, piatto);
        }

        return CarrelloItemMapper.toDTO(carrelloItemRepository.save(item));
    }

    public CarrelloItemDTO aggiornaItem(Long itemId, CarrelloItemRequestDTO dto) {
        CarrelloItem item = carrelloItemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Elemento carrello non trovato con id: " + itemId));

        Piatto piatto = piattoRepository.findById(dto.getPiattoId())
                .orElseThrow(() -> new RuntimeException("Piatto non trovato con id: " + dto.getPiattoId()));

        CarrelloItemMapper.updateEntity(item, dto, piatto);
        return CarrelloItemMapper.toDTO(carrelloItemRepository.save(item));
    }

    public void rimuoviItem(Long itemId) {
        if (!carrelloItemRepository.existsById(itemId)) {
            throw new RuntimeException("Elemento carrello non trovato con id: " + itemId);
        }
        carrelloItemRepository.deleteById(itemId);
    }

    public void svuotaCarrello(Long tavoloId) {
        carrelloItemRepository.deleteByTavoloId(tavoloId);
    }
}
