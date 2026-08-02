package com.example.demo.model;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tavoli")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Tavolo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "numero_tavolo", nullable = false, unique = true)
    private Integer numeroTavolo;

    @Column(length = 50)
    private String sala; // Opzionale: es. "Sala Interna", "Terrazza"

    @Column(name = "posti_a_sedere")
    private Integer postiASedere; // Opzionale: capienza del tavolo

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private StatoTavolo stato = StatoTavolo.LIBERO;

    public enum StatoTavolo {
        LIBERO,
        OCCUPATO,
        PRENOTATO,
        IN_PAGAMENTO
    }
}