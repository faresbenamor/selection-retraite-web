package com.selectionretraite.api.repositories;

import com.selectionretraite.api.entities.Residence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {

     List<Residence> findResidencesByRegion(String region);

     @Query("SELECT r.nom FROM Residence r")
     List<String> getAllName();

     @Query("SELECT r.logo, r.nom FROM Residence r WHERE r.region = :region")
     List<Residence> getLogoAndNameByRegion(@Param("region") String region);
}
