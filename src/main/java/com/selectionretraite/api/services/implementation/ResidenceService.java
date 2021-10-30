package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.Residence;
import com.selectionretraite.api.repositories.ResidenceRepository;
import com.selectionretraite.api.services.IResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResidenceService implements IResidenceService {

    private final ResidenceRepository residenceRepository;

    @Autowired
    public ResidenceService(ResidenceRepository residenceRepository) {
        this.residenceRepository = residenceRepository;
    }

    @Override
    public Residence save(Residence residence) {
        return residenceRepository.save(residence);
    }

    @Override
    public List<Residence> findAll() {
        return residenceRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        residenceRepository.deleteById(id);
    }

    @Override
    public Page<Residence> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Residence findById(Long id) {
        return residenceRepository.findById(id).orElse(null);
    }

}
