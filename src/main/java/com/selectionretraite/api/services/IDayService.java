package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Day;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IDayService {

    public Day save(Day day);
    public Day findById(Long id);
    public List<Day> findAll();
    public void deleteById(Long id);
    public Page<Day> findAll(Pageable pageable);
}