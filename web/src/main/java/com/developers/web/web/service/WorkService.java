package com.developers.web.web.service;

import com.developers.web.web.model.Work;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
public interface WorkService {

    Work add(Work work, MultipartFile photo);

    Work findOne(Long id);

    List<Work> findAll();

    Boolean delete(Long id);

}
