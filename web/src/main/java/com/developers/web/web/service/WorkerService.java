package com.developers.web.web.service;

import com.developers.web.web.model.Worker;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
public interface WorkerService {

    Worker add(Worker worker, MultipartFile startPhoto, MultipartFile endPhoto);

    Worker findOne(Long id);

    List<Worker> findAll();

    Boolean delete(Long id);

}
