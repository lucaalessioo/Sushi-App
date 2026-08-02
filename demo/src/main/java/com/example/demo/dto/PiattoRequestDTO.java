package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PiattoRequestDTO {

    @Size(max = 10, message = "Il codice piatto non può superare 10 caratteri")
    private String codicePiatto;

    @NotBlank(message = "Il nome è obbligatorio")
    @Size(max = 100, message = "Il nome non può superare 100 caratteri")
    private String nome;

    private String descrizione;

    @NotNull(message = "Il prezzo è obbligatorio")
    @DecimalMin(value = "0.0", inclusive = true, message = "Il prezzo non può essere negativo")
    private BigDecimal prezzo;

    private String immagineUrl;

    @Builder.Default
    private Boolean disponibile = true;

    @Builder.Default
    private Boolean isAllYouCanEat = true;

    @NotBlank(message = "La categoria è obbligatoria")
    @Size(max = 50, message = "La categoria non può superare 50 caratteri")
    private String categoria;
}
