package com.example.demo.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PiattoDTO {

    private Long id;
    private String codicePiatto;
    private String nome;
    private String descrizione;
    private BigDecimal prezzo;
    private String immagineUrl;
    private Boolean disponibile;
    private Boolean isAllYouCanEat;
    private String categoria;
}
