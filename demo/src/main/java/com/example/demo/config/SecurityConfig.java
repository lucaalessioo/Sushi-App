package com.example.demo.config;

import com.example.demo.service.CustomUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthFilter;
    private final CustomUserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .authorizeHttpRequests(auth -> auth
                        // Permette le richieste OPTIONS preflight dei browser
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()

                        // Endpoints pubblici per autenticazione (login / register)
                        .requestMatchers("/api/v1/auth/**").permitAll()

                        // Foto dei piatti: devono essere leggibili da <img>, che non manda il token
                        .requestMatchers("/uploads/**").permitAll()

                        // Elenco completo (anche non disponibili): solo ADMIN.
                        // Va messo PRIMA della regola pubblica, altrimenti viene coperto da quella.
                        .requestMatchers(HttpMethod.GET, "/api/piatti/admin").hasAuthority("ROLE_ADMIN")

                        // Consultazione piatti visibile a tutti
                        .requestMatchers(HttpMethod.GET, "/api/piatti/**").permitAll()

                        // Gestione piatti riservata all'ADMIN (include POST /api/piatti/immagine)
                        .requestMatchers(HttpMethod.POST, "/api/piatti/**").hasAuthority("ROLE_ADMIN")
                        .requestMatchers(HttpMethod.PUT, "/api/piatti/**").hasAuthority("ROLE_ADMIN")
                        .requestMatchers(HttpMethod.PATCH, "/api/piatti/**").hasAuthority("ROLE_ADMIN")
                        .requestMatchers(HttpMethod.DELETE, "/api/piatti/**").hasAuthority("ROLE_ADMIN")

                        // Gestione tavoli: ADMIN e TABLET
                        .requestMatchers("/api/tavoli", "/api/tavoli/**")
                        .hasAnyAuthority("ROLE_ADMIN", "ROLE_TABLET")

                        // Rotte ordini e carrello per TABLET e ADMIN
                        .requestMatchers("/api/v1/ordini", "/api/v1/ordini/**", "/api/v1/carrello",
                                "/api/v1/carrello/**")
                        .hasAnyAuthority("ROLE_ADMIN", "ROLE_TABLET")

                        // Qualsiasi altra richiesta necessita di autenticazione
                        .anyRequest().authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                // Richiama direttamente il metodo @Bean della classe senza passarlo come
                // parametro
                .authenticationProvider(authenticationProvider())
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        // Passa userDetailsService direttamente nel costruttore
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider(userDetailsService);

        // Imposta il passwordEncoder con il setter
        authProvider.setPasswordEncoder(passwordEncoder());

        return authProvider;
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("*"));
        // PATCH serve per il cambio di disponibilità dei piatti
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
