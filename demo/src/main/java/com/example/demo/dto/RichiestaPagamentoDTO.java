package com.example.demo.dto;

import com.example.demo.model.Conto;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RichiestaPagamentoDTO {

    @NotNull(message = "Specificare se richiesta conto o cassa")
    private Conto.RichiestaPagamento modalita;
}