package com.selectionretraite.api.repositories;

import com.selectionretraite.api.entities.Residence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {
}
