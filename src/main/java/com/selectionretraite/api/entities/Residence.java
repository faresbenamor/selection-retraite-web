package com.selectionretraite.api.entities;

import javax.persistence.*;
import java.util.List;


@Entity
public class Residence {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Long id;

    private String nom;

    private String logo;

    private String region;

    private String email;

    @OneToMany
    private List<Activity> activities;

    @OneToMany
    private List<News> news;

    @OneToMany
    private List<Alertes> alertes;

    @OneToMany
    private List<Album> albums;

    @OneToMany
    private List<Day> days;

    @OneToOne
    private User user;

    public List<Activity> getActivities() {
        return activities;
    }

    public void setActivities(List<Activity> activities) {
        this.activities = activities;
    }

    public List<News> getNews() {
        return news;
    }

    public void setNews(List<News> news) {
        this.news = news;
    }

    public List<Alertes> getAlertes() {
        return alertes;
    }

    public void setAlertes(List<Alertes> alertes) {
        this.alertes = alertes;
    }

    public List<Album> getAlbums() {
        return albums;
    }

    public void setAlbums(List<Album> albums) {
        this.albums = albums;
    }

    public List<Day> getDays() {
        return days;
    }

    public void setDays(List<Day> days) {
        this.days = days;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
