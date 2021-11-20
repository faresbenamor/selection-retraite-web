package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Residence;
import com.selectionretraite.api.services.IResidenceService;
import com.selectionretraite.api.services.implementation.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/residences")
@CrossOrigin("*")
public class ResidenceController {

    final IResidenceService residenceService;
    final FileStorageService fileStorageService;

    @Autowired
    public ResidenceController(IResidenceService residenceService, FileStorageService fileStorageService) {
        this.residenceService = residenceService;
        this.fileStorageService = fileStorageService;
    }
    @GetMapping
    public ResponseEntity<List<Residence>> findAll(){
        return ResponseEntity.ok(residenceService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Residence> findById(@PathVariable Long id){
        return ResponseEntity.ok(residenceService.findById(id));
    }

    @GetMapping("region/{region}")
    public List<Residence> findByRegion(@PathVariable String region) {
       return residenceService.findResidencesByRegion(region);
    }

    @GetMapping("regions/{region}")
    public List<Residence> getLogoAndName(@PathVariable String region) {
        return residenceService.getLogoAndNameByRegion(region);
    }

    @PostMapping
    public ResponseEntity<Residence> save( Residence residence){

        String fileName = fileStorageService.storeFile(residence.getFile());

        String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/downloadFile/")
                .path(fileName)
                .toUriString();
        residence.setLogo(fileDownloadUri);
        Optional<Residence> residence1 = Optional.of(residenceService.save(residence));
        Residence residence2 = residence1.get();
        residence2.setFile(null);
        return ResponseEntity.created(null).body(residence2);
    }

    @PutMapping
    public ResponseEntity<Residence> update(@RequestBody Residence residence){

        Residence residence1 = residenceService.save(residence);
        return ResponseEntity.accepted().body(residence1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        residenceService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
