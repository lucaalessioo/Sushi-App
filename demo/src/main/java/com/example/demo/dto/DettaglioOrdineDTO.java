package com.example.demo.dto;

import com.example.demo.model.DettaglioOrdine;
import lombok.*;

import java.math.BigDecimal;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DettaglioOrdineDTO {

    private Long id;
    private PiattoDTO piatto;
    private Integer quantita;
    private BigDecimal prezzoUnitario;
    private BigDecimal subtotale; // prezzoUnitario * quantita, calcolato dal mapper
    private DettaglioOrdine.StatoDettaglio stato;
}
