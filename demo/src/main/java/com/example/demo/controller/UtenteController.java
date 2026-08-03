package com.example.demo.controller;

import com.example.demo.dto.UtenteDTO;
import com.example.demo.dto.UtenteRequestDTO;
import com.example.demo.service.UtenteService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/utenti")
@RequiredArgsConstructor
public class UtenteController {

    private final UtenteService utenteService;

    @GetMapping
    public ResponseEntity<List<UtenteDTO>> getAllUtenti() {
        return ResponseEntity.ok(utenteService.getAllUtenti());
    }

    @GetMapping("/{id}")
    public ResponseEntity<UtenteDTO> getUtenteById(@PathVariable Long id) {
        return ResponseEntity.ok(utenteService.getUtenteById(id));
    }

    @PostMapping
    public ResponseEntity<UtenteDTO> creaUtente(@Valid @RequestBody UtenteRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(utenteService.creaUtente(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<UtenteDTO> aggiornaUtente(@PathVariable Long id, @Valid @RequestBody UtenteRequestDTO dto) {
        return ResponseEntity.ok(utenteService.aggiornaUtente(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminaUtente(@PathVariable Long id) {
        utenteService.eliminaUtente(id);
        return ResponseEntity.noContent().build();
    }
}