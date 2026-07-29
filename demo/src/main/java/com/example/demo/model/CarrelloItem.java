package com.example.demo.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "carrello_items")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CarrelloItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tavolo_id", nullable = false)
    private Utente tavolo;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "piatto_id", nullable = false)
    private Piatto piatto;

    @Column(nullable = false)
    @Builder.Default
    private Integer quantita = 1;

    @Column(columnDefinition = "TEXT")
    private String note;
}
