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

    // Opzionale: id del tavolo a cui associare l'utente (es. un tablet)
    private Long tavoloId;

    @Builder.Default
    private Utente.Ruolo ruolo = Utente.Ruolo.ROLE_TABLET;
}
