package com.example.demo.controller;

import com.example.demo.dto.RecensioneRequestDTO;
import com.example.demo.dto.RecensioneResponseDTO;
import com.example.demo.service.RecensioneService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/recensioni")
@RequiredArgsConstructor
public class RecensioneController {

    private final RecensioneService recensioneService;

    @GetMapping
    public ResponseEntity<List<RecensioneResponseDTO>> list() {
        return ResponseEntity.ok(recensioneService.listAll());
    }

    @PostMapping
    public ResponseEntity<RecensioneResponseDTO> create(@Valid @RequestBody RecensioneRequestDTO dto) {
        return ResponseEntity.status(HttpStatus.CREATED).body(recensioneService.crea(dto));
    }
}