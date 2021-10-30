package com.selectionretraite.api;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.selectionretraite.api.entities.Residence;

import javax.persistence.*;
import java.util.List;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;

    @Column(unique = true)
    private String username;

    private String password;

    @ManyToMany
    @JoinTable(name = "users_roles",joinColumns = {@JoinColumn(name = "user_id")}, inverseJoinColumns = {@JoinColumn( name = "role_id")})
    @JsonIgnoreProperties("users")
    private List<Role> roles;

    @OneToOne
    private Residence residence;

    public List<Role> getRoles() {
        return roles;
    }

    public Residence getResidence() {
        return residence;
    }

    public void setResidence(Residence residence) {
        this.residence = residence;
    }

    public void setRoles(List<Role> roles) {
        this.roles = roles;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
