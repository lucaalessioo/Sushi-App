package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "recensioni")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recensione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long tavoloId;

    private Integer numeroTavolo;

    @Column(length = 100)
    private String nomeCliente;

    @Column(name = "overall_rating", nullable = false)
    private Integer overallRating;

    /**
     * Colonna legacy su DB MySQL creati prima del refactor; va tenuta allineata a overallRating.
     */
    @Column(name = "valutazione")
    private Integer valutazione;

    @Column(columnDefinition = "TEXT")
    private String comment;

    /** Tag rapidi, separati da virgola (es. "Cibo eccezionale,Servizio veloce") */
    @Column(columnDefinition = "TEXT")
    private String tags;

    @Column(name = "data_creazione", updatable = false)
    private LocalDateTime dataCreazione;

    @OneToMany(mappedBy = "recensione", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<RecensionePiatto> valutazioniPiatti = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        this.dataCreazione = LocalDateTime.now();
        if (this.overallRating != null) {
            this.valutazione = this.overallRating;
        } else if (this.valutazione != null) {
            this.overallRating = this.valutazione;
        }
    }

    @PostLoad
    void allineaValutazioneLegacy() {
        if (this.overallRating == null && this.valutazione != null) {
            this.overallRating = this.valutazione;
        }
    }
}