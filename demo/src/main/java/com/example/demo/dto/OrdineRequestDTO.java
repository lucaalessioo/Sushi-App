package com.example.demo.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OrdineRequestDTO {

    @NotNull(message = "Il tavolo è obbligatorio")
    private Long tavoloId;

    @NotEmpty(message = "L'ordine deve contenere almeno un piatto")
    @Valid
    private List<DettaglioOrdineRequestDTO> dettagli;
}
