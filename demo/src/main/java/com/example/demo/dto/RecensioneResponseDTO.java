package com.example.demo.dto;

import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecensioneResponseDTO {
    private Long id;
    private Long tavoloId;
    private Integer numeroTavolo;
    private String nomeCliente;
    private Integer overallRating;
    private String comment;
    private List<String> tags;
    private List<ValutazionePiattoResponseDTO> dishRatings;
    private LocalDateTime dataCreazione;
}