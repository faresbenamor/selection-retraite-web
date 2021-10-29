package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


import java.util.List;

public interface IUserService {
    public User save(User user);
    public User findById(Long id);
    public List<User> findAll();
    public void deleteById(Long id);
}
