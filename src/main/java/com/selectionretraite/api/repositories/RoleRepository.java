package com.selectionretraite.api.repository;

import com.selectionretraite.api.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface RoleRepository extends JpaRepository<Role,Long> {

    public Role findByName(String name);
}