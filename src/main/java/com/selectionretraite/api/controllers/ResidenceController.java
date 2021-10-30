package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Residence;
import com.selectionretraite.api.services.IResidenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/residences")
public class ResidenceController {

    final IResidenceService residenceService;

    @Autowired
    public ResidenceController(IResidenceService residenceService) {
        this.residenceService = residenceService;
    }
    @GetMapping
    public ResponseEntity<List<Residence>> findAll(){
        return ResponseEntity.ok(residenceService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Residence> findById(@PathVariable Long id){
        return ResponseEntity.ok(residenceService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Residence> save(@RequestBody Residence residence){


        Optional<Residence> residence1 = Optional.of(residenceService.save(residence));
        return ResponseEntity.created(null).body(residence1.get());


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
