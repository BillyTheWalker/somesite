package com.developers.web.web.controller;

import com.developers.web.web.model.Worker;
import com.developers.web.web.service.WorkerService;
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
@RequestMapping("/worker")
public class WorkerController {
    @Autowired
    private WorkerService workerService;

    @PostMapping("/add")
    private ResponseEntity<Worker> add(@RequestParam MultipartFile startPhoto, @RequestParam MultipartFile endPhoto, @RequestParam String name, @RequestParam String position) {
        return new ResponseEntity<Worker>(workerService.add(new Worker().setName(name).setPosition(position), startPhoto, endPhoto), HttpStatus.OK);
    }

    @GetMapping("/find-one/{id}")
    private ResponseEntity<Worker> findOne(@PathVariable Long id) {
        return new ResponseEntity<Worker>(workerService.findOne(id), HttpStatus.OK);
    }

    @GetMapping("/find-all")
    private ResponseEntity<List<Worker>> findAll() {
        return new ResponseEntity<List<Worker>>(workerService.findAll(), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<Boolean> delete(@PathVariable Long id) {
        return new ResponseEntity<Boolean>(workerService.delete(id), HttpStatus.OK);
    }
}
