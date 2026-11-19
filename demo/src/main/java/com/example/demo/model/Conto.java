package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "conti")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Conto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tavolo_id", nullable = false)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Utente tavolo;

    @Column(nullable = false, precision = 8, scale = 2)
    @Builder.Default
    private BigDecimal totale = BigDecimal.ZERO;

    /** ALLA_CARTA = somma piatti; ALL_YOU_CAN_EAT = prezzo fisso a tavolo */
    @Enumerated(EnumType.STRING)
    @Column(name = "tipo_menu", length = 30)
    private TipoMenu tipoMenu;

    private Integer numeroPersone;

    @Column(name = "tipo_pasto", length = 20)
    private String tipoPasto;

    @Column(name = "prezzo_per_persona", precision = 8, scale = 2)
    private BigDecimal prezzoPerPersona;

    @Column(name = "totale_fisso", precision = 8, scale = 2)
    private BigDecimal totaleFisso;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private StatoConto stato = StatoConto.APERTO;

    @Column(name = "data_apertura", updatable = false)
    private LocalDateTime dataApertura;

    @Column(name = "data_chiusura")
    private LocalDateTime dataChiusura;

    /**
     * null = tavolo ancora a tavola (rosso in cassa);
     * RICHIESTA_CONTO = cameriere (blu); RICHIESTA_CASSA = paga in cassa (verde).
     */
    @Enumerated(EnumType.STRING)
    @Column(name = "richiesta_pagamento", length = 30)
    private RichiestaPagamento richiestaPagamento;

    @OneToMany(mappedBy = "conto", cascade = CascadeType.ALL)
    @Builder.Default
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<Ordine> ordini = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.dataApertura = LocalDateTime.now();
    }

    public void aggiungiOrdine(Ordine ordine) {
        ordine.setConto(this);
        this.ordini.add(ordine);
        if (tipoMenu != TipoMenu.ALL_YOU_CAN_EAT) {
            this.totale = this.totale.add(ordine.getTotale() != null ? ordine.getTotale() : BigDecimal.ZERO);
        }
    }

    public enum TipoMenu {
        ALLA_CARTA,
        ALL_YOU_CAN_EAT
    }

    public enum StatoConto {
        APERTO, PAGATO, IN_PAGAMENTO
    }

    public enum RichiestaPagamento {
        RICHIESTA_CONTO,
        RICHIESTA_CASSA
    }
}