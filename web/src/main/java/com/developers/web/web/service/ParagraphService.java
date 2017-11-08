package com.developers.web.web.service;

import com.developers.web.web.model.Paragraph;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
public interface ParagraphService {

    Paragraph add(Paragraph paragraph,Long idBlog, MultipartFile photo);

    Paragraph findOne(Long id);

    Boolean delete(Long id);

    List<Paragraph> findAll();
}
