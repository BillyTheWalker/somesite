package com.developers.web.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Created by danul on 08.11.2017.
 */
@Controller
public class Router {
    @GetMapping("/")
    private String index() {
        return "forward:/index.html";
    }
}
