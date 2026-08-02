package com.example.demo.dto;

import com.example.demo.model.Tavolo;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TavoloRequestDTO {

    @NotNull(message = "Il numero del tavolo è obbligatorio")
    private Integer numeroTavolo;

    private String sala;

    private Integer postiASedere;

    @Builder.Default
    private Tavolo.StatoTavolo stato = Tavolo.StatoTavolo.LIBERO;
}
