package com.developers.web.web.controller;

import com.developers.web.web.model.Worker;
import com.developers.web.web.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
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
    private Worker add(@RequestParam MultipartFile startPhoto, @RequestParam MultipartFile endPhoto, @RequestParam String name, @RequestParam String position) {
        return workerService.add(new Worker().setName(name).setPosition(position), startPhoto, endPhoto);
    }

    @GetMapping("/find-one/{id}")
    private Worker findOne(Long id) {
        return workerService.findOne(id);
    }

    @GetMapping("/find-all")
    private List<Worker> findAll() {
        return workerService.findAll();
    }
}
