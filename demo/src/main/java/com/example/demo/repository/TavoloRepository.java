package com.example.demo.repository;


import com.example.demo.model.Tavolo;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface TavoloRepository extends JpaRepository<Tavolo, Long> {

    // Trova un tavolo specifico tramite il suo numero
    Optional<Tavolo> findByNumeroTavolo(Integer numeroTavolo);

    // Utile per recuperare tutti i tavoli liberi o occupati
    List<Tavolo> findByStato(Tavolo.StatoTavolo stato);

    // Verificare se esiste già un tavolo con quel numero
    boolean existsByNumeroTavolo(Integer numeroTavolo);
}
