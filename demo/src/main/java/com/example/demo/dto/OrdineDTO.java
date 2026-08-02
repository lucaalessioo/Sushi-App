package com.example.demo.dto;

import com.example.demo.model.Ordine;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrdineDTO {

    private Long id;
    private TavoloDTO tavolo;
    private BigDecimal totale;
    private Ordine.StatoOrdine stato;
    private LocalDateTime dataOra;
    private List<DettaglioOrdineDTO> dettagli;
}
