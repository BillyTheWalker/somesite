package com.developers.web.web.service;

import com.developers.web.web.model.Blog;

import java.util.List;

/**
 * Created by danul on 08.11.2017.
 */
public interface BlogService {

    Blog add(Blog blog);

    Blog findOne(Long id);

    Boolean delete(Long id);

    List<Blog> findAll();

}
