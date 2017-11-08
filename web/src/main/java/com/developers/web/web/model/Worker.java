package com.developers.web.web.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by danul on 08.11.2017.
 */
@Entity
public class Worker{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String position;
    private String photoStart;
    private String photoEnd;

    public Long getId() {
        return id;
    }

    public Worker setId(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public Worker setName(String name) {
        this.name = name;
        return this;
    }

    public String getPosition() {
        return position;
    }

    public Worker setPosition(String position) {
        this.position = position;
        return this;
    }

    public String getPhotoStart() {
        return photoStart;
    }

    public Worker setPhotoStart(String photoStart) {
        this.photoStart = photoStart;
        return this;
    }

    public String getPhotoEnd() {
        return photoEnd;
    }

    public Worker setPhotoEnd(String photoEnd) {
        this.photoEnd = photoEnd;
        return this;
    }
}
