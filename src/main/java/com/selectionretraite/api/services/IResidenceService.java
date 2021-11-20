package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Residence;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IResidenceService {

    public Residence save(Residence residence);
    public Residence findById(Long id);
    public List<Residence> findAll();
    public List<Residence> findResidencesByRegion(String region);
    public List<Residence> getLogoAndNameByRegion(String region);
    public void deleteById(Long id);
    public Page<Residence> findAll(Pageable pageable);
}
