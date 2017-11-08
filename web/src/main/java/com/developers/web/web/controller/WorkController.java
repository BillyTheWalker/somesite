package com.developers.web.web.controller;

import com.developers.web.web.model.Work;
import com.developers.web.web.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    private WorkService workService;

    @PostMapping("/add")
    private Work add(@RequestParam MultipartFile photo, @RequestParam String name, @RequestParam String description) {
        return workService.add(new Work().setName(name).setDescription(description), photo);
    }

    @GetMapping("/find-one/{id}")
    private Work findOne(Long id) {
        return workService.findOne(id);
    }

    @GetMapping("/find-all")
    private List<Work> findAll() {
        return workService.findAll();
    }

}
