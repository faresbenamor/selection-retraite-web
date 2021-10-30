package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.News;
import com.selectionretraite.api.services.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/newss")
public class NewsController {

    final INewsService newsService;

    @Autowired
    public NewsController(INewsService newsService) {
        this.newsService = newsService;
    }
    @GetMapping
    public ResponseEntity<List<News>> findAll(){
        return ResponseEntity.ok(newsService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<News> findById(@PathVariable Long id){
        return ResponseEntity.ok(newsService.findById(id));
    }

    @PostMapping
    public ResponseEntity<News> save(@RequestBody News news){


        Optional<News> news1 = Optional.of(newsService.save(news));
        return ResponseEntity.created(null).body(news1.get());


    }

    @PutMapping
    public ResponseEntity<News> update(@RequestBody News news){

        News news1 = newsService.save(news);
        return ResponseEntity.accepted().body(news1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        newsService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
