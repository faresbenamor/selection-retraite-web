package com.selectionretraite.api.repositories;

import com.selectionretraite.api.entities.Residence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {

    public List<Residence> findResidencesByRegion(String region);

    @Query("SELECT r.logo, r.nom FROM Residence r WHERE r.region = :region")
    public List<Residence> getLogoAndNameByRegion(@Param("region") String region);
}
