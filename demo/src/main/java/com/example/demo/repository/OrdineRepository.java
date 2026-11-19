package com.example.demo.repository;

import com.example.demo.model.Ordine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface OrdineRepository extends JpaRepository<Ordine, Long> {
    List<Ordine> findByTavoloId(Long tavoloId);

    List<Ordine> findByContoId(Long contoId); // nuovo: ordini di un conto

    List<Ordine> findByStato(Ordine.StatoOrdine stato); // es. INVIATO, IN_PREPARAZIONE per la cucina

    List<Ordine> findByTavoloIdAndStato(Long tavoloId, Ordine.StatoOrdine stato);

    @Query("""
            SELECT DISTINCT o FROM Ordine o
            LEFT JOIN FETCH o.dettagli d
            LEFT JOIN FETCH d.piatto
            WHERE o.conto.id = :contoId
            """)
    List<Ordine> findByContoIdWithDettagli(@Param("contoId") Long contoId);

    @Query("""
            SELECT DISTINCT o FROM Ordine o
            LEFT JOIN FETCH o.dettagli d
            WHERE o.tavolo.id = :tavoloId AND o.dataOra >= :since
            ORDER BY o.dataOra DESC
            """)
    List<Ordine> findRecentByTavoloWithDettagli(
            @Param("tavoloId") Long tavoloId,
            @Param("since") LocalDateTime since);

}