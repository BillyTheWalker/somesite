package com.developers.web.web.controller;

import com.developers.web.web.model.Paragraph;
import com.developers.web.web.service.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@RestController
@RequestMapping("paragraph")
public class ParagraphController {
    @Autowired
    private ParagraphService paragraphService;


    @PostMapping("/add")
    private ResponseEntity<Paragraph> add(@RequestParam MultipartFile photo, @RequestParam String description, @RequestParam Long idBlog) {
        return new ResponseEntity<Paragraph>(paragraphService.add(new Paragraph().setDescription(description), idBlog, photo), HttpStatus.OK);
    }

    @GetMapping("/find-one/{id}")
    private ResponseEntity<Paragraph> findOne(@PathVariable Long id) {
        return new ResponseEntity<Paragraph>(paragraphService.findOne(id), HttpStatus.OK);
    }

    @GetMapping("/find-all")
    private ResponseEntity<List<Paragraph>> findAll() {
        return new ResponseEntity<List<Paragraph>>(paragraphService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<Boolean>(paragraphService.delete(id), HttpStatus.OK);
    }
}
