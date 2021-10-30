package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.Repas;
import com.selectionretraite.api.repositories.RepasRepository;
import com.selectionretraite.api.services.IRepasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RepasService implements IRepasService {

    private final RepasRepository repasRepository;

    @Autowired
    public RepasService(RepasRepository repasRepository) {
        this.repasRepository = repasRepository;
    }

    @Override
    public Repas save(Repas repas) {
        return repasRepository.save(repas);
    }

    @Override
    public List<Repas> findAll() {
        return repasRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        repasRepository.deleteById(id);
    }

    @Override
    public Page<Repas> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Repas findById(Long id) {
        return repasRepository.findById(id).orElse(null);
    }

}
