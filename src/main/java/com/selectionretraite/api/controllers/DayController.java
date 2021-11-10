package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Day;
import com.selectionretraite.api.services.IDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/days")
@CrossOrigin("*")
public class DayController {

    final IDayService dayService;

    @Autowired
    public DayController(IDayService dayService) {
        this.dayService = dayService;
    }
    @GetMapping
    public ResponseEntity<List<Day>> findAll(){
        return ResponseEntity.ok(dayService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Day> findById(@PathVariable Long id){
        return ResponseEntity.ok(dayService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Day> save(@RequestBody Day day){


        Optional<Day> day1 = Optional.of(dayService.save(day));
        return ResponseEntity.created(null).body(day1.get());


    }

    @PutMapping
    public ResponseEntity<Day> update(@RequestBody Day day){

        Day day1 = dayService.save(day);
        return ResponseEntity.accepted().body(day1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        dayService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
