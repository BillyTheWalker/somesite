package com.developers.web.web.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@Entity
public class Blog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String theme;
    @Column(columnDefinition = "VARCHAR(10000)", name = "description")
    private String description;

    @OneToMany(mappedBy = "blog", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Paragraph> paragraphs;

    public Long getId() {
        return id;
    }

    public Blog setId(Long id) {
        this.id = id;
        return this;
    }

    public String getTheme() {
        return theme;
    }

    public Blog setTheme(String theme) {
        this.theme = theme;
        return this;
    }

    public String getDescription() {
        return description;
    }

    public Blog setDescription(String description) {
        this.description = description;
        return this;
    }

    public List<Paragraph> getParagraphs() {
        return paragraphs;
    }

    public Blog setParagraphs(List<Paragraph> paragraphs) {
        this.paragraphs = paragraphs;
        return this;
    }
}
