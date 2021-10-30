package com.selectionretraite.api.repositories;

import com.selectionretraite.api.entities.Alertes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlertesRepository extends JpaRepository<Alertes, Long> {
}
