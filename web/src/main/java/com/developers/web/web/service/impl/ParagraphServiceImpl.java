package com.developers.web.web.service.impl;

import com.developers.web.web.model.Paragraph;
import com.developers.web.web.repository.BlogRepository;
import com.developers.web.web.repository.ParagraphRepository;
import com.developers.web.web.service.GoogleDriveService;
import com.developers.web.web.service.ParagraphService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@Service
public class ParagraphServiceImpl implements ParagraphService {
    @Autowired
    private BlogRepository blogRepository;
    @Autowired
    private ParagraphRepository paragraphRepository;
    @Autowired
    private GoogleDriveService googleDriveService;

    @Override
    public Paragraph add(Paragraph paragraph, Long idBlog, MultipartFile photo) {
        return paragraphRepository.save(paragraph.setBlog(blogRepository.findOne(idBlog)).setPhoto(googleDriveService.upload(photo)));
    }

    @Override
    public Paragraph findOne(Long id) {
        return paragraphRepository.findOne(id);
    }

    @Override
    public Boolean delete(Long id) {
        try {
            paragraphRepository.delete(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<Paragraph> findAll() {
        return paragraphRepository.findAll();
    }
}
