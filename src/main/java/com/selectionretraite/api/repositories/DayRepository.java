package com.selectionretraite.api.repositories;

import com.selectionretraite.api.entities.Day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DayRepository extends JpaRepository<Day, Long> {
}
