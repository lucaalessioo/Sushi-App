package com.example.demo.dto;

import com.example.demo.model.Utente;
import lombok.*;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UtenteDTO {

    private Long id;
    private String nome;
    private TavoloDTO tavolo; // null se l'utente non è associato a un tavolo (es. admin)
    private Utente.Ruolo ruolo;
    private LocalDateTime dataCreazione;
}
