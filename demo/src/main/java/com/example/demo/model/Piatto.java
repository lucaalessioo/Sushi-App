package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Entity
@Table(name = "piatti")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Piatto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "codice_piatto", unique = true, length = 10)
    private String codicePiatto;

    @Column(nullable = false, length = 100)
    private String nome;

    @Column(columnDefinition = "TEXT")
    private String descrizione;

    @Column(nullable = false, precision = 6, scale = 2)
    private BigDecimal prezzo;

    @Column(name = "immagine_url")
    private String immagineUrl;

    @Builder.Default
    private Boolean disponibile = true;

    @Column(name = "is_all_you_can_eat")
    @Builder.Default
    private Boolean isAllYouCanEat = true;

    @Column(nullable = false, length = 50)
    private String categoria;
}
