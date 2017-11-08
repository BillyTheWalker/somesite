package com.developers.web.web.service.impl;

import com.developers.web.web.model.Worker;
import com.developers.web.web.repository.WorkerRepository;
import com.developers.web.web.service.GoogleDriveService;
import com.developers.web.web.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@Service
public class WorkerServiceImpl implements WorkerService {
    @Autowired
    private WorkerRepository workerRepository;
    @Autowired
    private GoogleDriveService googleDriveService;

    @Override
    public Worker add(Worker worker, MultipartFile startPhoto, MultipartFile endPhoto) {
        return workerRepository.save(worker.setPhotoStart(googleDriveService.upload(startPhoto)).setPhotoEnd(googleDriveService.upload(endPhoto)));
    }

    @Override
    public Worker findOne(Long id) {
        return workerRepository.findOne(id);
    }

    @Override
    public List<Worker> findAll() {
        return workerRepository.findAll();
    }

    @Override
    public Boolean delete(Long id) {
        try {
            workerRepository.delete(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
