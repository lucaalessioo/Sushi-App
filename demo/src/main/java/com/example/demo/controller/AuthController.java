package com.example.demo.controller;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.model.Utente;
import com.example.demo.service.JwtService;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword())
        );

        Utente utente = (Utente) authentication.getPrincipal();
        String jwtToken = jwtService.generateToken(utente);

        AuthResponse response = AuthResponse.builder()
                .token(jwtToken)
                .username(utente.getNome())
                .ruolo(utente.getRuolo().name())
                .numeroTavolo(utente.getNumeroTavolo())
                .build();

        return ResponseEntity.ok(response);
    }
}
