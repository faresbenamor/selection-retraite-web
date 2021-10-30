package com.selectionretraite.api.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
public class Day {

    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Id
    private Long id;

    private LocalDate date;

    @OneToMany(mappedBy = "day")
    private List<Repas> repas;

    @ManyToOne
    private Residence residence;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public List<Repas> getRepas() {
        return repas;
    }

    public void setRepas(List<Repas> repas) {
        this.repas = repas;
    }

    public Residence getResidence() {
        return residence;
    }

    public void setResidence(Residence residence) {
        this.residence = residence;
    }
}
