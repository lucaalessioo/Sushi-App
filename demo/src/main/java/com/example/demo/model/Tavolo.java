package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

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

    @Column(nullable = false, unique = true)
    private Integer numero;

    private String sala;

    private Integer posti;

    // Posizione percentuale x e y sulla pianta (es. 45.5)
    @Column(nullable = false)
    private Double x;

    @Column(nullable = false)
    private Double y;


public enum StatoTavolo {
    LIBERO,
    OCCUPATO,
    IN_PAGAMENTO,
    PRENOTATO
}

     @Enumerated(EnumType.STRING)
     @Column(nullable = false)
     private StatoTavolo stato; // LIBERO, OCCUPATO, IN_PAGAMENTO, PRENOTATO
    
} 

