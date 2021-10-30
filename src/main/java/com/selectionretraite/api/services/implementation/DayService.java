package com.selectionretraite.api.services.implementation;

import com.selectionretraite.api.entities.Day;
import com.selectionretraite.api.repositories.DayRepository;
import com.selectionretraite.api.services.IDayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DayService implements IDayService {

    private final DayRepository dayRepository;

    @Autowired
    public DayService(DayRepository dayRepository) {
        this.dayRepository = dayRepository;
    }

    @Override
    public Day save(Day day) {
        return dayRepository.save(day);
    }

    @Override
    public List<Day> findAll() {
        return dayRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        dayRepository.deleteById(id);
    }

    @Override
    public Page<Day> findAll(Pageable pageable) {
        return null;
    }

    @Override
    public Day findById(Long id) {
        return dayRepository.findById(id).orElse(null);
    }

}
