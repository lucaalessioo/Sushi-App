package com.example.demo.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.ContoDTO;
import com.example.demo.service.ContoService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/conti")
@RequiredArgsConstructor
public class ContoController {

    private final ContoService contoService;

    // Tablet: totale corrente del tavolo
    @GetMapping("/tavolo/{tavoloId}/attivo")
    public ResponseEntity<ContoDTO> getContoAttivo(@PathVariable Long tavoloId) {
        return ResponseEntity.ok(contoService.getContoAttivo(tavoloId));
    }

    // Tablet: "Termina e paga"
    @PostMapping("/tavolo/{tavoloId}/richiedi-pagamento")
    public ResponseEntity<ContoDTO> richiediPagamento(@PathVariable Long tavoloId) {
        return ResponseEntity.ok(contoService.richiediPagamento(tavoloId));
    }

    // Cassa (ADMIN): tavoli che stanno per pagare
    @GetMapping("/in-pagamento")
    public ResponseEntity<List<ContoDTO>> getContiInPagamento() {
        return ResponseEntity.ok(contoService.getContiInPagamento());
    }

    // Cassa (ADMIN): incasso confermato
    @PostMapping("/{contoId}/conferma-pagamento")
    public ResponseEntity<ContoDTO> confermaPagamento(@PathVariable Long contoId) {
        return ResponseEntity.ok(contoService.confermaPagamento(contoId));
    }
}
