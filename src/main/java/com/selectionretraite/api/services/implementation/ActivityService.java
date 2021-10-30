package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.Activity;
import com.selectionretraite.api.repositories.ActivityRepository;
import com.selectionretraite.api.services.IActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService implements IActivityService {

    private final ActivityRepository activityRepository;

    @Autowired
    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    @Override
    public Activity save(Activity activity) {
        return activityRepository.save(activity);
    }

    @Override
    public List<Activity> findAll() {
        return activityRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        activityRepository.deleteById(id);
    }

    @Override
    public Page<Activity> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Activity findById(Long id) {
        return activityRepository.findById(id).orElse(null);
    }

}
