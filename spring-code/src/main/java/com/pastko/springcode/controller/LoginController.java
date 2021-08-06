package com.pastko.springcode.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RestController
public class LoginController {

    @GetMapping("/login")
    public String hello() {
        return "hello";
    }
}
