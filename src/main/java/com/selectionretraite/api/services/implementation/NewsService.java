package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.News;
import com.selectionretraite.api.repositories.NewsRepository;
import com.selectionretraite.api.services.INewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NewsService implements INewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    @Override
    public News save(News news) {
        return newsRepository.save(news);
    }

    @Override
    public List<News> findAll() {
        return newsRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        newsRepository.deleteById(id);
    }

    @Override
    public Page<News> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public News findById(Long id) {
        return newsRepository.findById(id).orElse(null);
    }

}
