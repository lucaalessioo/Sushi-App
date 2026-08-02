package com.example.demo.dto;

import com.example.demo.model.Ordine;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StatoOrdineUpdateDTO {

    @NotNull(message = "Lo stato è obbligatorio")
    private Ordine.StatoOrdine stato;
}
