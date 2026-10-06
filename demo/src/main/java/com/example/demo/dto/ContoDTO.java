package com.example.demo.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import com.example.demo.model.Conto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContoDTO {
    private Long id;
    private Long tavoloId;
    private Integer numeroTavolo;
    private BigDecimal totale;
    private Conto.StatoConto stato;
    private LocalDateTime dataApertura;
    private LocalDateTime dataChiusura;
    private List<OrdineDTO> ordini;
}
