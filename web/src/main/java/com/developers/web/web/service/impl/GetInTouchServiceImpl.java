package com.developers.web.web.service.impl;

import com.developers.web.web.model.GetInTouch;
import com.developers.web.web.repository.GetInTouchRepository;
import com.developers.web.web.service.GetInTouchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Anatoliy on 09.11.2017.
 */
@Service
public class GetInTouchServiceImpl implements GetInTouchService {

    @Autowired
    private GetInTouchRepository getInTouchRepository;

    @Override
    public GetInTouch add(GetInTouch getInTouch) {
        return getInTouchRepository.save(getInTouch);
    }

    @Override
    public GetInTouch findOne(Long id) {
        return getInTouchRepository.findOne(id);
    }

    @Override
    public Boolean delete(Long id) {
        try {
            getInTouchRepository.delete(id);
            return true;
        }
        catch (Exception e){
            return false;
        }
    }

    @Override
    public Boolean changeStatus(Long id, String status) {
        try{
            getInTouchRepository.save(findOne(id).setStatusString(status));
            return true;
        }
        catch (Exception e){
            return false;
        }
    }


    @Override
    public List<GetInTouch> findAll() {
        return getInTouchRepository.findAll();
    }
}
