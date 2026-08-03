package com.example.demo.controller;

import com.example.demo.dto.CarrelloItemDTO;
import com.example.demo.dto.CarrelloItemRequestDTO;
import com.example.demo.service.CarrelloService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/carrello")
@RequiredArgsConstructor
public class CarrelloController {

    private final CarrelloService carrelloService;

    @GetMapping("/tavolo/{tavoloId}")
    public ResponseEntity<List<CarrelloItemDTO>> getCarrelloByTavolo(@PathVariable Long tavoloId) {
        return ResponseEntity.ok(carrelloService.getCarrelloByTavolo(tavoloId));
    }

    @PostMapping
    public ResponseEntity<CarrelloItemDTO> aggiungiItem(@Valid @RequestBody CarrelloItemRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(carrelloService.aggiungiItem(dto));
    }

    @PutMapping("/{itemId}")
    public ResponseEntity<CarrelloItemDTO> aggiornaItem(
            @PathVariable Long itemId,
            @Valid @RequestBody CarrelloItemRequestDTO dto
    ) {
        return ResponseEntity.ok(carrelloService.aggiornaItem(itemId, dto));
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<Void> rimuoviItem(@PathVariable Long itemId) {
        carrelloService.rimuoviItem(itemId);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/tavolo/{tavoloId}")
    public ResponseEntity<Void> svuotaCarrello(@PathVariable Long tavoloId) {
        carrelloService.svuotaCarrello(tavoloId);
        return ResponseEntity.noContent().build();
    }
}