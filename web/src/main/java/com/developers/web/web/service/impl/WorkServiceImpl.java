package com.developers.web.web.service.impl;

import com.developers.web.web.model.Work;
import com.developers.web.web.repository.WorkRepository;
import com.developers.web.web.service.GoogleDriveService;
import com.developers.web.web.service.WorkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@Service
public class WorkServiceImpl implements WorkService {

    @Autowired
    private GoogleDriveService googleDriveService;
    @Autowired
    private WorkRepository workRepository;

    @Override
    public Work add(Work work, MultipartFile photo) {
        return workRepository.save(work.setPhoto(googleDriveService.upload(photo)));
    }

    @Override
    public Work findOne(Long id) {
        return workRepository.findOne(id);
    }

    @Override
    public List<Work> findAll() {
        return workRepository.findAll();
    }

    @Override
    public Boolean delete(Long id) {
        try {
            workRepository.delete(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
