package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Repas;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IRepasService {

    public Repas save(Repas repas);
    public Repas findById(Long id);
    public List<Repas> findAll();
    public void deleteById(Long id);
    public Page<Repas> findAll(Pageable pageable);
}