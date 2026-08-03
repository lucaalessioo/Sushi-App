package com.example.demo.repository;

import com.example.demo.model.CarrelloItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CarrelloItemRepository extends JpaRepository<CarrelloItem, Long> {

    // Trova tutti gli elementi attualmente nel carrello di un determinato tavolo
    List<CarrelloItem> findByTavoloId(Long tavoloId);

    // Cerca se un piatto specifico è già presente nel carrello di quel tavolo (utile per incrementare la quantità)
    Optional<CarrelloItem> findByTavoloIdAndPiattoId(Long tavoloId, Long piattoId);

    // Svuota completamente il carrello del tavolo dopo che l'ordine è stato inviato
    void deleteByTavoloId(Long tavoloId);
}
