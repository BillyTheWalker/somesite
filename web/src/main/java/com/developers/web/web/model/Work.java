package com.developers.web.web.model;

import javax.persistence.*;

/**
 * Created by danul on 08.11.2017.
 */
@Entity
public class Work {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "VARCHAR(10000)", name = "description")
    private String description;
    private String photo;


    public Long getId() {
        return id;
    }

    public Work setId(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Work setName(String name) {
        this.name = name;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Work setDescription(String description) {
        this.description = description;
        return this;
    }

    public String getPhoto() {
        return photo;
    }

    public Work setPhoto(String photo) {
        this.photo = photo;
        return this;
    }
}
