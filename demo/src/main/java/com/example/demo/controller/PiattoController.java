package com.example.demo.controller;

import com.example.demo.dto.PiattoDTO;
import com.example.demo.dto.PiattoRequestDTO;
import com.example.demo.service.PiattoService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/piatti")
@RequiredArgsConstructor
public class PiattoController {

    private final PiattoService piattoService;

    @GetMapping
    public ResponseEntity<List<PiattoDTO>> getAllPiatti(
            @RequestParam(required = false) String categoria,
            @RequestParam(required = false) Boolean isAllYouCanEat,
            @RequestParam(required = false, defaultValue = "true") Boolean soloDisponibili
    ) {
        return ResponseEntity.ok(piattoService.getAllPiatti(categoria, isAllYouCanEat, soloDisponibili));
    }

    @GetMapping("/{id}")
    public ResponseEntity<PiattoDTO> getPiattoById(@PathVariable Long id) {
        return ResponseEntity.ok(piattoService.getPiattoById(id));
    }

    @GetMapping("/codice/{codicePiatto}")
    public ResponseEntity<PiattoDTO> getPiattoByCodice(@PathVariable String codicePiatto) {
        return ResponseEntity.ok(piattoService.getPiattoByCodice(codicePiatto));
    }

    @PostMapping
    public ResponseEntity<PiattoDTO> creaPiatto(@Valid @RequestBody PiattoRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(piattoService.creaPiatto(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<PiattoDTO> aggiornaPiatto(@PathVariable Long id, @Valid @RequestBody PiattoRequestDTO dto) {
        return ResponseEntity.ok(piattoService.aggiornaPiatto(id, dto));
    }

    @PatchMapping("/{id}/disponibilita")
    public ResponseEntity<PiattoDTO> cambiaDisponibilita(@PathVariable Long id, @RequestParam Boolean disponibile) {
        return ResponseEntity.ok(piattoService.cambiaDisponibilita(id, disponibile));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminaPiatto(@PathVariable Long id) {
        piattoService.eliminaPiatto(id);
        return ResponseEntity.noContent().build();
    }
}
