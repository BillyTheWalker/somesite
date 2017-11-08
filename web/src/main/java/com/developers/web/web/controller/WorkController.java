package com.developers.web.web.controller;

import com.developers.web.web.model.Work;
import com.developers.web.web.service.WorkService;
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
@RequestMapping("/work")
public class WorkController {

    @Autowired
    private WorkService workService;

    @PostMapping("/add")
    private ResponseEntity<Work> add(@RequestParam MultipartFile photo, @RequestParam String name, @RequestParam String description) {
        return new ResponseEntity<Work>(workService.add(new Work().setName(name).setDescription(description), photo), HttpStatus.OK);
    }

    @GetMapping("/find-one/{id}")
    private ResponseEntity<Work> findOne(@PathVariable Long id) {
        return new ResponseEntity<Work>(workService.findOne(id), HttpStatus.OK);
    }

    @GetMapping("/find-all")
    private ResponseEntity<List<Work>> findAll() {
        return new ResponseEntity<List<Work>>(workService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<Boolean>(workService.delete(id), HttpStatus.OK);
    }


}
