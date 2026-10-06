package com.example.demo.repository;

import com.example.demo.model.Ordine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrdineRepository extends JpaRepository<Ordine, Long> {
    List<Ordine> findByTavoloId(Long tavoloId);

    List<Ordine> findByContoId(Long contoId); // nuovo: ordini di un conto

    List<Ordine> findByStato(Ordine.StatoOrdine stato); // es. INVIATO, IN_PREPARAZIONE per la cucina

    List<Ordine> findByTavoloIdAndStato(Long tavoloId, Ordine.StatoOrdine stato);

}