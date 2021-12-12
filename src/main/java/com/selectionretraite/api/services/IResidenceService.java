package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Residence;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IResidenceService {

     Residence save(Residence residence);
     Residence findById(Long id);
     List<Residence> findAll();
     List<Residence> findResidencesByRegion(String region);
     List<Residence> getLogoAndNameByRegion(String region);
     List<String> getAllName();
     void deleteById(Long id);
     Page<Residence> findAll(Pageable pageable);
}
