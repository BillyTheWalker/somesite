package com.developers.web.web.controller;

import com.developers.web.web.model.Blog;
import com.developers.web.web.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@RestController
@RequestMapping("/blog")
public class BlogController {
    @Autowired
    private BlogService blogService;


    @PostMapping("/add")
    private Blog add(@RequestParam String theme, @RequestParam String description) {
        return blogService.add(new Blog().setTheme(theme).setDescription(description));
    }

    @GetMapping("/find-one/{id}")
    private Blog findOne(@PathVariable Long id) {
        return blogService.findOne(id);
    }

    @GetMapping("/find-all")
    private List<Blog> findAll() {
        return blogService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    private Boolean delete(@PathVariable Long id) {
        return blogService.delete(id);
    }
}
