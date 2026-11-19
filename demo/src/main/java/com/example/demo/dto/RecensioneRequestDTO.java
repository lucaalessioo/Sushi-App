package com.example.demo.dto;

import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import lombok.Data;

import java.util.List;

@Data
public class RecensioneRequestDTO {

    @NotNull
    @Min(1)
    @Max(5)
    private Integer overallRating;

    private Long tavoloId;
    private Integer numeroTavolo;

    @Size(max = 100)
    private String nomeCliente;

    @Size(max = 2000)
    private String comment;

    private List<@NotBlank @Size(max = 80) String> tags;

    @Valid
    private List<ValutazionePiattoRequestDTO> dishRatings;
}