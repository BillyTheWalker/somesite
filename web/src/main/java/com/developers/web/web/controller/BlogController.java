package com.developers.web.web.controller;

import com.developers.web.web.model.Blog;
import com.developers.web.web.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    private ResponseEntity<Blog> add(@RequestParam String theme, @RequestParam String description) {
        return new ResponseEntity<>(blogService.add(new Blog().setTheme(theme).setDescription(description)), HttpStatus.OK);
    }

    @GetMapping("/find-one/{id}")
    private ResponseEntity<Blog> findOne(@PathVariable Long id) {
        return new ResponseEntity<>(blogService.findOne(id), HttpStatus.OK);
    }

    @GetMapping("/find-all")
    private List<Blog> findAll() {
        return blogService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<>(blogService.delete(id), HttpStatus.OK);
    }
}
