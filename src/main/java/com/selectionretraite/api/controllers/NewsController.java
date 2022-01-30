package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.News;
import com.selectionretraite.api.entities.Residence;
import com.selectionretraite.api.services.INewsService;
import com.selectionretraite.api.services.implementation.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/newss")
@CrossOrigin("*")
public class NewsController {

    final INewsService newsService;
    final FileStorageService fileStorageService;

    @Autowired
    public NewsController(INewsService newsService, FileStorageService fileStorageService) {
        this.newsService = newsService;
        this.fileStorageService = fileStorageService;
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
    public ResponseEntity<News> save( News news, @RequestParam("residenceId") Long residenceId){

        news.setResidence(new Residence());
        news.getResidence().setId(residenceId);
        if(news.getFile() != null){

            String fileName = fileStorageService.storeFile(news.getFile());

            String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath()
                    .path("/downloadFile/")
                    .path(fileName)
                    .toUriString();
            news.setImage(fileDownloadUri);
        }


        Optional<News> news1 = Optional.of(newsService.save(news));
        News news2 = news1.get();
        news2.setFile(null);
        return ResponseEntity.created(null).body(news2);


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
