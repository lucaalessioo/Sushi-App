package com.example.demo.controller;

import com.example.demo.dto.PiattoRequestDTO;
import com.example.demo.model.Piatto;
import com.example.demo.service.PiattoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/piatti")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class PiattoController {

    private final PiattoService piattoService;

    // =========================
    // CLIENTE
    // =========================

    @GetMapping
    public ResponseEntity<List<Piatto>> getPiatti() {
        return ResponseEntity.ok(
                piattoService.getDisponibili());
    }

    @GetMapping("/all-you-can-eat")
    public ResponseEntity<List<Piatto>> getAllYouCanEat() {
        return ResponseEntity.ok(
                piattoService.getAllYouCanEat());
    }

    @GetMapping("/alla-carta")
    public ResponseEntity<List<Piatto>> getAllaCarta() {
        return ResponseEntity.ok(
                piattoService.getAllaCarta());
    }

    // =========================
    // ADMIN
    // =========================

    @GetMapping("/admin")
    public ResponseEntity<List<Piatto>> getTuttiAdmin() {
        return ResponseEntity.ok(
                piattoService.getTutti());
    }

    @PostMapping
    public ResponseEntity<Piatto> creaPiatto(
            @Valid @RequestBody PiattoRequestDTO dto) {

        Piatto piatto = piattoService.creaPiatto(dto);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(piatto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Piatto> aggiornaPiatto(
            @PathVariable Long id,
            @Valid @RequestBody PiattoRequestDTO dto) {

        return ResponseEntity.ok(
                piattoService.aggiornaPiatto(id, dto));
    }

    @PatchMapping("/{id}/disponibilita")
    public ResponseEntity<Piatto> cambiaDisponibilita(
            @PathVariable Long id,
            @RequestParam Boolean disponibile) {

        return ResponseEntity.ok(
                piattoService.cambiaDisponibilita(id, disponibile));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminaPiatto(
            @PathVariable Long id) {

        piattoService.eliminaPiatto(id);

        return ResponseEntity.noContent().build();
    }
}