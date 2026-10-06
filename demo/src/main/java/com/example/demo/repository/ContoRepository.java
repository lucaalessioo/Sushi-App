package com.example.demo.repository;

import com.example.demo.model.Conto;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContoRepository extends JpaRepository<Conto, Long> {
    List<Conto> findByStato(Conto.StatoConto stato);

    // ContoRepository
    Optional<Conto> findByTavoloIdAndStatoNot(Long tavoloId, Conto.StatoConto stato);

    Optional<Conto> findByTavoloIdAndStato(Long tavoloId, Conto.StatoConto stato);
}
