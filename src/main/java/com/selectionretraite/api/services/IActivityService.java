package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.Activity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IActivityService {

    public Activity save(Activity activity);
    public Activity findById(Long id);
    public List<Activity> findAll();
    public void deleteById(Long id);
    public Page<Activity> findAll(Pageable pageable);
}