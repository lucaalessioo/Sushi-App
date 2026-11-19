package com.example.demo.repository;

import com.example.demo.model.Recensione;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecensioneRepository extends JpaRepository<Recensione, Long> {

    @Query("SELECT DISTINCT r FROM Recensione r LEFT JOIN FETCH r.valutazioniPiatti ORDER BY r.dataCreazione DESC")
    List<Recensione> findAllWithPiatti();
}