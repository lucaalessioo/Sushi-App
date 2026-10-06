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

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private StatoConto stato = StatoConto.APERTO;

    @Column(name = "data_apertura", updatable = false)
    private LocalDateTime dataApertura;

    @Column(name = "data_chiusura")
    private LocalDateTime dataChiusura;

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
        this.totale = this.totale.add(ordine.getTotale());
    }

    public enum StatoConto {
        APERTO, PAGATO, IN_PAGAMENTO
    }
}