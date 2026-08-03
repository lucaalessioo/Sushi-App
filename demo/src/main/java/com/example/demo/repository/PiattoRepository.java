package com.example.demo.repository;

import com.example.demo.model.Piatto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PiattoRepository extends JpaRepository<Piatto, Long> {

    // Trova un piatto tramite il codice identificativo (es. "A12", "S01")
    Optional<Piatto> findByCodicePiatto(String codicePiatto);

    // Recupera solo i piatti disponibili per la categoria selezionata
    List<Piatto> findByCategoriaAndDisponibileTrue(String categoria);

    // Filtra i piatti in base al fatto che siano inclusi o meno nella formula All You Can Eat
    List<Piatto> findByIsAllYouCanEatAndDisponibileTrue(Boolean isAllYouCanEat);

    // Recupera tutti i piatti disponibili
    List<Piatto> findByDisponibileTrue();
}