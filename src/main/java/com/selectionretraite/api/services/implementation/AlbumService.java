package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.Album;
import com.selectionretraite.api.repositories.AlbumRepository;
import com.selectionretraite.api.services.IAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumService implements IAlbumService {

    private final AlbumRepository albumRepository;

    @Autowired
    public AlbumService(AlbumRepository albumRepository) {
        this.albumRepository = albumRepository;
    }

    @Override
    public Album save(Album album) {
        return albumRepository.save(album);
    }

    @Override
    public List<Album> findAll() {
        return albumRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        albumRepository.deleteById(id);
    }

    @Override
    public Page<Album> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Album findById(Long id) {
        return albumRepository.findById(id).orElse(null);
    }

}
