package com.example.demo.controller;

import com.example.demo.dto.TavoloDTO;
import com.example.demo.dto.TavoloRequestDTO;
import com.example.demo.model.Tavolo;
import com.example.demo.service.TavoloService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/tavoli")
@RequiredArgsConstructor
public class TavoloController {

    private final TavoloService tavoloService;

    @GetMapping
    public ResponseEntity<List<TavoloDTO>> getAllTavoli() {
        return ResponseEntity.ok(tavoloService.getAllTavoli());
    }

    @GetMapping("/{id}")
    public ResponseEntity<TavoloDTO> getTavoloById(@PathVariable Long id) {
        return ResponseEntity.ok(tavoloService.getTavoloById(id));
    }

    @PostMapping
    public ResponseEntity<TavoloDTO> creaTavolo(@Valid @RequestBody TavoloRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(tavoloService.creaTavolo(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<TavoloDTO> aggiornaTavolo(@PathVariable Long id, @Valid @RequestBody TavoloRequestDTO dto) {
        return ResponseEntity.ok(tavoloService.aggiornaTavolo(id, dto));
    }

    @PatchMapping("/{id}/stato")
    public ResponseEntity<TavoloDTO> cambiaStatoTavolo(@PathVariable Long id, @RequestParam Tavolo.StatoTavolo stato) {
        return ResponseEntity.ok(tavoloService.cambiaStatoTavolo(id, stato));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminaTavolo(@PathVariable Long id) {
        tavoloService.eliminaTavolo(id);
        return ResponseEntity.noContent().build();
    }
}