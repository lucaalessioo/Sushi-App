package com.example.demo.dto;


import com.example.demo.model.Tavolo.StatoTavolo;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class TavoloDTO {
    private Long id;
    
    @NotNull(message = "Il numero del tavolo è obbligatorio")
    private Integer numero;
    
    private String sala;
    private Integer posti;
    
    @NotNull(message = "La coordinata X è obbligatoria")
    private Double x;
    
    @NotNull(message = "La coordinata Y è obbligatoria")
    private Double y;
    
    private StatoTavolo stato;
}
