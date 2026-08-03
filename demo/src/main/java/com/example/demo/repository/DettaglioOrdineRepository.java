package com.example.demo.repository;

import com.example.demo.model.DettaglioOrdine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DettaglioOrdineRepository extends JpaRepository<DettaglioOrdine, Long> {

    // Recupera le singole righe di dettaglio appartenenti a uno specifico ordine
    List<DettaglioOrdine> findByOrdineId(Long ordineId);
}