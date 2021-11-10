package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Activity;
import com.selectionretraite.api.services.IActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/activitys")
@CrossOrigin("*")
public class ActivityController {

    final IActivityService activityService;

    @Autowired
    public ActivityController(IActivityService activityService) {
        this.activityService = activityService;
    }
    @GetMapping
    public ResponseEntity<List<Activity>> findAll(){
        return ResponseEntity.ok(activityService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Activity> findById(@PathVariable Long id){
        return ResponseEntity.ok(activityService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Activity> save(@RequestBody Activity activity){


        Optional<Activity> activity1 = Optional.of(activityService.save(activity));
        return ResponseEntity.created(null).body(activity1.get());


    }

    @PutMapping
    public ResponseEntity<Activity> update(@RequestBody Activity activity){

        Activity activity1 = activityService.save(activity);
        return ResponseEntity.accepted().body(activity1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        activityService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
