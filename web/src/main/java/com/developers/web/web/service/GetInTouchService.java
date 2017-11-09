package com.developers.web.web.service;

import com.developers.web.web.model.GetInTouch;
import com.developers.web.web.model.enums.Status;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Anatoliy on 09.11.2017.
 */
@Service
public interface GetInTouchService {

    GetInTouch add(GetInTouch getInTouch);

    GetInTouch findOne(Long id);

    Boolean delete(Long id);

    Boolean changeStatus(Long id, String status);

    List<GetInTouch> findAll();


}
