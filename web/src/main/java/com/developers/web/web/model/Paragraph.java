package com.developers.web.web.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

/**
 * Created by danul on 08.11.2017.
 */
@Entity
public class Paragraph {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String photo;
    private String description;
    @JsonIgnore
    @ManyToOne
    private Blog blog;

    public Long getId() {
        return id;
    }

    public Paragraph setId(Long id) {
        this.id = id;
        return this;
    }

    public String getPhoto() {
        return photo;
    }

    public Paragraph setPhoto(String photo) {
        this.photo = photo;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Paragraph setDescription(String description) {
        this.description = description;
        return this;
    }

    public Blog getBlog() {
        return blog;
    }

    public Paragraph setBlog(Blog blog) {
        this.blog = blog;
        return this;
    }
}
