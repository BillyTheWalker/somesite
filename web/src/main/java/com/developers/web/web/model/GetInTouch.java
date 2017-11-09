package com.developers.web.web.model;

import com.developers.web.web.model.enums.Status;
import com.google.api.services.drive.Drive;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by Anatoliy on 09.11.2017.
 */
@Entity
public class GetInTouch {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String companyName;

    private String email;

    private String message;

    private String phoneNumber;

    private Status status;

    public GetInTouch() {
    }

    public GetInTouch(String name, String companyName, String email, String message, String phoneNumber, Status status){
        this.name = name;
        this.companyName = companyName;
        this.email = email;
        this.message = message;
        this.phoneNumber = phoneNumber;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public GetInTouch setId(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return name;
    }

    public GetInTouch setName(String name) {
        this.name = name;
        return this;
    }

    public String getCompanyName() {
        return companyName;
    }

    public GetInTouch setCompanyName(String companyName) {
        this.companyName = companyName;
        return this;
    }

    public String getEmail() {
        return email;
    }

    public GetInTouch setEmail(String email) {
        this.email = email;
        return this;
    }

    public String getMessage() {
        return message;
    }

    public GetInTouch setMessage(String message) {
        this.message = message;
        return this;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public GetInTouch setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }

    public Status getStatus() {
        return status;
    }

    public GetInTouch setStatus(Status status) {
        this.status = status;
        return this;
    }

    public GetInTouch setStatusString(String status) {
        if(status.toUpperCase().equals(Status.NEW.toString())) {
            this.status=Status.NEW;
        }
        else
            if(status.toUpperCase().equals(Status.AWAIT.toString())) {
                this.status=Status.AWAIT;
            }
            else
                if(status.toUpperCase().equals(Status.VIEWED.toString()) ){
                    this.status=Status.VIEWED;
                }
        return this;
    }
}
