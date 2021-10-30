package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.Alertes;
import com.selectionretraite.api.repositories.AlertesRepository;
import com.selectionretraite.api.services.IAlertesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlertesService implements IAlertesService {

    private final AlertesRepository alertesRepository;

    @Autowired
    public AlertesService(AlertesRepository alertesRepository) {
        this.alertesRepository = alertesRepository;
    }

    @Override
    public Alertes save(Alertes alertes) {
        return alertesRepository.save(alertes);
    }

    @Override
    public List<Alertes> findAll() {
        return alertesRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        alertesRepository.deleteById(id);
    }

    @Override
    public Page<Alertes> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Alertes findById(Long id) {
        return alertesRepository.findById(id).orElse(null);
    }

}
