package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.News;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface INewsService {

    public News save(News news);
    public News findById(Long id);
    public List<News> findAll();
    public void deleteById(Long id);
    public Page<News> findAll(Pageable pageable);
}