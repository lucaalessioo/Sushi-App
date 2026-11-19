package com.example.demo.dto;

import com.example.demo.model.Conto;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;
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

    /** Opzionale: impostato dal tablet al primo ordine della sessione */
    private Conto.TipoMenu tipoMenu;
    private Integer numeroPersone;
    private String tipoPasto;
    private BigDecimal prezzoPerPersona;
    private BigDecimal totaleFisso;
}
