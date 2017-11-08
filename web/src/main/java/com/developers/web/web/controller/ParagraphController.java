package com.developers.web.web.controller;

import com.developers.web.web.model.Paragraph;
import com.developers.web.web.service.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private Paragraph add(@RequestParam MultipartFile photo, @RequestParam String description, @RequestParam Long idBlog) {
        return paragraphService.add(new Paragraph().setDescription(description), idBlog, photo);
    }

    @GetMapping("/find-one/{id}")
    private Paragraph findOne(@PathVariable Long id) {
        return paragraphService.findOne(id);
    }

    @GetMapping("/find-all")
    private List<Paragraph> findAll() {
        return paragraphService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    private Boolean delete(@PathVariable Long id) {
        return paragraphService.delete(id);
    }
}
