package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Album;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IAlbumService {

    public Album save(Album album);
    public Album findById(Long id);
    public List<Album> findAll();
    public void deleteById(Long id);
    public Page<Album> findAll(Pageable pageable);
}