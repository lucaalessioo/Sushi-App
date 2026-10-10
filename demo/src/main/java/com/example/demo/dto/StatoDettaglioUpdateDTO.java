package com.example.demo.dto;

import com.example.demo.model.DettaglioOrdine;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class StatoDettaglioUpdateDTO {

    @NotNull(message = "Lo stato è obbligatorio")
    private DettaglioOrdine.StatoDettaglio stato;
}
