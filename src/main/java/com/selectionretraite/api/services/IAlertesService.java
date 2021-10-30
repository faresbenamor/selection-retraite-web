package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Alertes;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAlertesService {

    public Alertes save(Alertes alertes);
    public Alertes findById(Long id);
    public List<Alertes> findAll();
    public void deleteById(Long id);
    public Page<Alertes> findAll(Pageable pageable);
}