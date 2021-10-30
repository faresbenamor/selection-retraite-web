package com.selectionretraite.api.repositories;

import com.selectionretraite.api.entities.Repas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepasRepository extends JpaRepository<Repas, Long> {
}
