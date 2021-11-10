package com.selectionretraite.api.controllers;

import com.selectionretraite.api.entities.Album;
import com.selectionretraite.api.services.IAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/albums")
@CrossOrigin("*")
public class AlbumController {

    final IAlbumService albumService;

    @Autowired
    public AlbumController(IAlbumService albumService) {
        this.albumService = albumService;
    }
    @GetMapping
    public ResponseEntity<List<Album>> findAll(){
        return ResponseEntity.ok(albumService.findAll());
    }

    @GetMapping("{id}")
    public ResponseEntity<Album> findById(@PathVariable Long id){
        return ResponseEntity.ok(albumService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Album> save(@RequestBody Album album){


        Optional<Album> album1 = Optional.of(albumService.save(album));
        return ResponseEntity.created(null).body(album1.get());


    }

    @PutMapping
    public ResponseEntity<Album> update(@RequestBody Album album){

        Album album1 = albumService.save(album);
        return ResponseEntity.accepted().body(album1);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Long id){
        albumService.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
