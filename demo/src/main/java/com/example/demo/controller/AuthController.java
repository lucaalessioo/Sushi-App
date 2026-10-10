package com.example.demo.controller;

import com.example.demo.dto.AuthResponse;
import com.example.demo.dto.LoginRequest;
import com.example.demo.model.Utente;
import com.example.demo.service.JwtService;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
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
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest request, HttpServletResponse response) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));

        Utente utente = (Utente) authentication.getPrincipal();
        String jwtToken = jwtService.generateToken(utente);

        // 1. Crea il cookie HTTP-Only blindato con il token JWT
        Cookie jwtCookie = new Cookie("jwt", jwtToken);
        jwtCookie.setHttpOnly(true);  // Impedisce qualsiasi accesso via JavaScript/Console
        jwtCookie.setSecure(false);   // Imposta a true in produzione quando usi HTTPS
        jwtCookie.setPath("/");
        jwtCookie.setMaxAge(7 * 24 * 60 * 60); // Durata: 7 giorni (o a tua scelta)

        // 2. Aggiungi il cookie alla risposta HTTP
        response.addCookie(jwtCookie);

        // 3. Restituisci i dati utente nella risposta (senza bisogno di usare il token lato JS)
        AuthResponse authResponse = AuthResponse.builder()
                .token(jwtToken) // Puoi comunque lasciarlo nel DTO per compatibilità
                .username(utente.getNome())
                .ruolo(utente.getRuolo().name())
                .tavoloId(utente.getRuolo() == Utente.Ruolo.ROLE_TABLET ? utente.getId() : null)
                .numeroTavolo(utente.getNumeroTavolo())
                .build();

        return ResponseEntity.ok(authResponse);
    }

    @PostMapping("/logout")
    public ResponseEntity<Void> logout(HttpServletResponse response) {
        // Distrugge il cookie azzerando il MaxAge
        Cookie jwtCookie = new Cookie("jwt", null);
        jwtCookie.setHttpOnly(true);
        jwtCookie.setPath("/");
        jwtCookie.setMaxAge(0);

        response.addCookie(jwtCookie);

        return ResponseEntity.ok().build();
    }
}