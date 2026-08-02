package com.example.demo.dto;

import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarrelloItemDTO {

    private Long id;
    private Long tavoloId;
    private PiattoDTO piatto;
    private Integer quantita;
    private String note;
    private BigDecimal subtotale; // piatto.prezzo * quantita, calcolato dal mapper
}
