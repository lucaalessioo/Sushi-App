package com.example.demo.dto;

import com.example.demo.model.Tavolo;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TavoloDTO {

    private Long id;
    private Integer numeroTavolo;
    private String sala;
    private Integer postiASedere;
    private Tavolo.StatoTavolo stato;
}
