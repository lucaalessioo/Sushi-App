package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Tavolo;

@Repository
public interface TavoloRepository extends JpaRepository<Tavolo, Long> {
    boolean existsByNumero(Integer numero);
    Optional<Tavolo> findByNumero(Integer numero);
}
