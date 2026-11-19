package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ValutazionePiattoRequestDTO {
    private Long piattoId;

    @NotBlank
    @Size(max = 150)
    private String nomePiatto;

    private String immagineUrl;

    @NotNull
    @Min(1)
    @Max(5)
    private Integer rating;
}