package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Repas;
import com.selectionretraite.api.services.IRepasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/repass")
public class RepasController {

    final IRepasService repasService;

    @Autowired
    public RepasController(IRepasService repasService) {
        this.repasService = repasService;
    }
    @GetMapping
    public ResponseEntity<List<Repas>> findAll(){
        return ResponseEntity.ok(repasService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Repas> findById(@PathVariable Long id){
        return ResponseEntity.ok(repasService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Repas> save(@RequestBody Repas repas){


        Optional<Repas> repas1 = Optional.of(repasService.save(repas));
        return ResponseEntity.created(null).body(repas1.get());


    }

    @PutMapping
    public ResponseEntity<Repas> update(@RequestBody Repas repas){

        Repas repas1 = repasService.save(repas);
        return ResponseEntity.accepted().body(repas1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        repasService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
