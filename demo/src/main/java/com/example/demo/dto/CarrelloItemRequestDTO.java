package com.example.demo.dto;

import jakarta.validation.constraints.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarrelloItemRequestDTO {

    @NotNull(message = "Il tavolo è obbligatorio")
    private Long tavoloId;

    @NotNull(message = "Il piatto è obbligatorio")
    private Long piattoId;

    @NotNull(message = "La quantità è obbligatoria")
    @Min(value = 1, message = "La quantità minima è 1")
    @Builder.Default
    private Integer quantita = 1;

    private String note;
}
