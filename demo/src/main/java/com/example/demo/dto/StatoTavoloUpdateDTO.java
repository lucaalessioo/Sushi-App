package com.example.demo.dto;

import com.example.demo.model.Tavolo.StatoTavolo;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class StatoTavoloUpdateDTO {
    @NotNull(message = "Lo stato è obbligatorio")
    private StatoTavolo stato;
}