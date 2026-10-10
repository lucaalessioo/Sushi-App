package com.example.demo.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.service.CustomUserDetailsService;
import com.example.demo.service.JwtService;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws ServletException, IOException {

        // Bearer ha priorità sul cookie: localStorage è aggiornato al login,
        // mentre un cookie jwt vecchio/scaduto (maxAge 7gg vs JWT 24h) può restare.
        List<String> candidati = new ArrayList<>(2);

        final String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            candidati.add(authHeader.substring(7));
        }

        if (request.getCookies() != null) {
            for (Cookie cookie : request.getCookies()) {
                if ("jwt".equals(cookie.getName()) && cookie.getValue() != null && !cookie.getValue().isBlank()) {
                    candidati.add(cookie.getValue());
                    break;
                }
            }
        }

        if (SecurityContextHolder.getContext().getAuthentication() == null) {
            for (String jwt : candidati) {
                if (tryAuthenticate(jwt, request)) {
                    break;
                }
            }
        }

        filterChain.doFilter(request, response);
    }

    private boolean tryAuthenticate(String jwt, HttpServletRequest request) {
        try {
            final String username = jwtService.extractUsername(jwt);
            if (username == null) {
                return false;
            }
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);
            if (!jwtService.isTokenValid(jwt, userDetails)) {
                return false;
            }
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    userDetails,
                    null,
                    userDetails.getAuthorities()
            );
            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            SecurityContextHolder.getContext().setAuthentication(authToken);
            return true;
        } catch (Exception ignored) {
            // Token malformato/scaduto/utente assente: prova il candidato successivo
            return false;
        }
    }
}
