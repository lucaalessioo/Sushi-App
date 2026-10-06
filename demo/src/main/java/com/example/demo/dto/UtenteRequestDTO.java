package com.example.demo.dto;

import com.example.demo.model.Utente;
import jakarta.validation.constraints.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UtenteRequestDTO {

    @NotBlank(message = "Il nome è obbligatorio")
    @Size(max = 100, message = "Il nome non può superare 100 caratteri")
    private String nome;

    @NotBlank(message = "La password è obbligatoria")
    @Size(min = 6, message = "La password deve avere almeno 6 caratteri")
    private String password;

    // Obbligatorio per i tablet (ROLE_TABLET), null per l'ADMIN
    @Positive(message = "Il numero del tavolo deve essere positivo")
    private Integer numeroTavolo;

    @Builder.Default
    private Utente.Ruolo ruolo = Utente.Ruolo.ROLE_TABLET;
}