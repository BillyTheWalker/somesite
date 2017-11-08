package com.developers.web.web.service.impl;

import com.developers.web.web.model.Blog;
import com.developers.web.web.repository.BlogRepository;
import com.developers.web.web.repository.ParagraphRepository;
import com.developers.web.web.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
@Service
public class BlogServiceImpl implements BlogService {
    @Autowired
    private BlogRepository blogRepository;
    @Autowired
    private ParagraphRepository paragraphRepository;

    @Override
    public Blog add(Blog blog) {
        return blogRepository.save(blog);

    }

    @Override
    public Blog findOne(Long id) {
        return blogRepository.findOne(id);
    }

    @Override
    public Boolean delete(Long id) {
        try {
            blogRepository.delete(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<Blog> findAll() {
        return blogRepository.findAll();
    }

}
