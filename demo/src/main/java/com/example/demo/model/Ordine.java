package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ordini")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ordine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tavolo_id", nullable = false)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Utente tavolo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "conto_id", nullable = false)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Conto conto;

    @Column(nullable = false, precision = 8, scale = 2)
    @Builder.Default
    private BigDecimal totale = BigDecimal.ZERO;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private StatoOrdine stato = StatoOrdine.INVIATO;

    @Column(name = "data_ora", updatable = false)
    private LocalDateTime dataOra;

    @OneToMany(mappedBy = "ordine", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private List<DettaglioOrdine> dettagli = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.dataOra = LocalDateTime.now();
    }

    public enum StatoOrdine {
        INVIATO,
        IN_PREPARAZIONE,
        SERVITO,
        CANCELLATO,
        PAGATO
    }
}