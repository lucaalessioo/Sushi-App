package com.example.demo.repository;

import com.example.demo.model.Ordine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdineRepository extends JpaRepository<Ordine, Long> {

    // Recupera tutti gli ordini effettuati da un determinato tavolo
    List<Ordine> findByTavoloId(Long tavoloId);

    // Filtra gli ordini per stato (es. IN_INVIATO, IN_PREPARAZIONE per la vista cucina/cassa)
    List<Ordine> findByStato(Ordine.StatoOrdine stato);

    // Recupera gli ordini con un specifico stato per un determinato tavolo
    List<Ordine> findByTavoloIdAndStato(Long tavoloId, Ordine.StatoOrdine stato);

    // Trova tutti gli ordini attivi di un tavolo (es. esclusi quelli già pagati)
    List<Ordine> findByTavoloIdAndStatoNot(Long tavoloId, Ordine.StatoOrdine stato);
}