package com.selectionretraite.api.services;

import com.selectionretraite.api.entities.User;


import java.util.List;

public interface IUserService {
    public User save(User user);
    public User findById(Long id);
    public List<User> findAll();
    public void deleteById(Long id);
}
