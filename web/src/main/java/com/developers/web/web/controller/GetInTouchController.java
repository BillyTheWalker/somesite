package com.developers.web.web.controller;

import com.developers.web.web.model.GetInTouch;
import com.developers.web.web.model.enums.Status;
import com.developers.web.web.service.GetInTouchService;
import com.sun.org.apache.xpath.internal.operations.Bool;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by Anatoliy on 09.11.2017.
 */
@RestController
@RequestMapping("/getInTouch")
public class GetInTouchController {

    @Autowired
    private GetInTouchService getInTouchService;

    @PostMapping("/add")
    private ResponseEntity<GetInTouch> add(@RequestParam String name, @RequestParam String email,
                                           @RequestParam String message,@RequestParam String phoneNumber,
                                           @RequestParam(required = false) String companyName){
        if(name==null||email==null||message==null||phoneNumber==null)
        {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        else
        {
            return new ResponseEntity<>(
                    getInTouchService.add(new GetInTouch(name,companyName,email,message,phoneNumber,Status.NEW))
                    ,HttpStatus.OK);
        }
    }

    @GetMapping("/findOne/{id}")
    private ResponseEntity<GetInTouch> findOne(@PathVariable Long id) {
        try{
            return new ResponseEntity<>(getInTouchService.findOne(id),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<Boolean> delete(@PathVariable Long id) {
        try{
            return new ResponseEntity<>(getInTouchService.delete(id),HttpStatus.OK);
        }
        catch (Exception e)
        {
            return  new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    @GetMapping("/findAll")
    private ResponseEntity<List<GetInTouch>> findAll() {
        return new ResponseEntity<>(getInTouchService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/changeStatus/{id}")
    private ResponseEntity<Boolean> changeStatus(@PathVariable Long id ,@RequestParam String status) {
        return new ResponseEntity<>(getInTouchService.changeStatus(id,status),HttpStatus.OK);
    }
}
