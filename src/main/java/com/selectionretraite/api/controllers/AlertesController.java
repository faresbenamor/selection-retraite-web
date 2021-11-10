package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Alertes;
import com.selectionretraite.api.services.IAlertesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/alertess")
@CrossOrigin("*")
public class AlertesController {

    final IAlertesService alertesService;

    @Autowired
    public AlertesController(IAlertesService alertesService) {
        this.alertesService = alertesService;
    }
    @GetMapping
    public ResponseEntity<List<Alertes>> findAll(){
        return ResponseEntity.ok(alertesService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Alertes> findById(@PathVariable Long id){
        return ResponseEntity.ok(alertesService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Alertes> save(@RequestBody Alertes alertes){


        Optional<Alertes> alertes1 = Optional.of(alertesService.save(alertes));
        return ResponseEntity.created(null).body(alertes1.get());


    }

    @PutMapping
    public ResponseEntity<Alertes> update(@RequestBody Alertes alertes){

        Alertes alertes1 = alertesService.save(alertes);
        return ResponseEntity.accepted().body(alertes1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        alertesService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
