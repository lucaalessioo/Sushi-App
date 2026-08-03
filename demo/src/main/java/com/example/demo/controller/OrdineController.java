package com.example.demo.controller;

import com.example.demo.dto.OrdineDTO;
import com.example.demo.dto.OrdineRequestDTO;
import com.example.demo.dto.StatoOrdineUpdateDTO;
import com.example.demo.model.Ordine;
import com.example.demo.service.OrdineService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/ordini")
@RequiredArgsConstructor
public class OrdineController {

    private final OrdineService ordineService;

    @PostMapping
    public ResponseEntity<OrdineDTO> creaOrdine(@Valid @RequestBody OrdineRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ordineService.creaOrdine(dto));
    }

    @PostMapping("/checkout/{tavoloId}")
    public ResponseEntity<OrdineDTO> creaOrdineDaCarrello(@PathVariable Long tavoloId) {
        return ResponseEntity.status(HttpStatus.CREATED).body(ordineService.creaOrdineDaCarrello(tavoloId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrdineDTO> getOrdineById(@PathVariable Long id) {
        return ResponseEntity.ok(ordineService.getOrdineById(id));
    }

    @GetMapping("/tavolo/{tavoloId}")
    public ResponseEntity<List<OrdineDTO>> getOrdiniByTavolo(@PathVariable Long tavoloId) {
        return ResponseEntity.ok(ordineService.getOrdiniByTavolo(tavoloId));
    }

    @GetMapping("/stato/{stato}")
    public ResponseEntity<List<OrdineDTO>> getOrdiniByStato(@PathVariable Ordine.StatoOrdine stato) {
        return ResponseEntity.ok(ordineService.getOrdiniByStato(stato));
    }

    @PatchMapping("/{id}/stato")
    public ResponseEntity<OrdineDTO> aggiornaStato(
            @PathVariable Long id,
            @Valid @RequestBody StatoOrdineUpdateDTO dto
    ) {
        return ResponseEntity.ok(ordineService.aggiornaStato(id, dto));
    }
}