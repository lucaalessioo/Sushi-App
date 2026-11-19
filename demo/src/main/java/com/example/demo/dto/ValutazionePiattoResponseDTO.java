package com.example.demo.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ValutazionePiattoResponseDTO {
    private Long piattoId;
    private String nomePiatto;
    private String immagineUrl;
    private Integer rating;
}