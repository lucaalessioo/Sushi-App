package com.example.demo.config;

import com.example.demo.model.Utente;
import com.example.demo.repository.UtenteRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

/**
 * Crea l'utente admin all'avvio se non esiste ancora.
 * Nome e password si impostano in application.properties (app.admin.nome /
 * app.admin.password).
 * Se la password non è impostata, non fa nulla.
 */
@Slf4j
@Component
@RequiredArgsConstructor
public class AdminSeeder implements CommandLineRunner {

    private final UtenteRepository utenteRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${app.admin.nome:admin}")
    private String nome;

    @Value("${app.admin.password:}")
    private String password;

    @Override
    public void run(String... args) {
        if (password.isBlank()) {
            log.warn("AdminSeeder: app.admin.password non impostata, nessun admin creato");
            return;
        }
        if (utenteRepository.findByNome(nome).isPresent()) {
            log.info("AdminSeeder: l'utente '{}' esiste già, non lo modifico", nome);
            return;
        }

        Utente admin = Utente.builder()
                .nome(nome)
                .password(passwordEncoder.encode(password)) // BCrypt: mai salvare la password in chiaro
                .ruolo(Utente.Ruolo.ROLE_ADMIN)
                .build(); // numeroTavolo resta null: vale solo per i tablet

        utenteRepository.save(admin);
        log.info("AdminSeeder: creato l'utente admin '{}'", nome);
    }
}
