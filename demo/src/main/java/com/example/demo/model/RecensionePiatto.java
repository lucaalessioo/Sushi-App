package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "recensione_piatti")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RecensionePiatto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "recensione_id", nullable = false)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    private Recensione recensione;

    private Long piattoId;

    @Column(nullable = false, length = 150)
    private String nomePiatto;

    private String immagineUrl;

    @Column(nullable = false)
    private Integer rating;
}