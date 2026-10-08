package com.example.demo.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.PosizioneTavoloDTO;
import com.example.demo.dto.TavoloDTO;
import com.example.demo.interfacce.TavoloService;
import com.example.demo.model.Tavolo.StatoTavolo;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/tavoli")
@RequiredArgsConstructor
@CrossOrigin(origins = "*") // Configura i filtri CORS in base alle esigenze
public class TavoloController {

    private final TavoloService tavoloService;

    @GetMapping
    public ResponseEntity<List<TavoloDTO>> getAll() {
        return ResponseEntity.ok(tavoloService.getAllTavoli());
    }

    @PostMapping
    public ResponseEntity<TavoloDTO> create(@Valid @RequestBody TavoloDTO dto) {
        TavoloDTO nuovo = tavoloService.createTavolo(dto);
        return new ResponseEntity<>(nuovo, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<TavoloDTO> update(@PathVariable Long id, @Valid @RequestBody TavoloDTO dto) {
        return ResponseEntity.ok(tavoloService.updateTavolo(id, dto));
    }

    @PatchMapping("/{id}/posizione")
    public ResponseEntity<TavoloDTO> updatePosizione(@PathVariable Long id, @RequestBody PosizioneTavoloDTO posDto) {
        return ResponseEntity.ok(tavoloService.updatePosizione(id, posDto));
    }

    @PatchMapping("/{id}/stato")
    public ResponseEntity<TavoloDTO> updateStato(@PathVariable Long id, @RequestParam StatoTavolo stato) {
        return ResponseEntity.ok(tavoloService.updateStato(id, stato));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        tavoloService.deleteTavolo(id);
        return ResponseEntity.noContent().build();
    }
}
