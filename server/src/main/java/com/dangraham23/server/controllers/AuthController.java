package com.dangraham23.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dangraham23.server.entities.User;
import com.dangraham23.server.services.AuthService;

@RestController
@RequestMapping("/api/v1/auth")
public class AuthController {
    @Autowired
    AuthService authService;

    @PostMapping("/register")
    public int registerUser(User user){
        return authService.registerUser(user);
    }

    @PostMapping("/login")
    public int loginUser(String email, String password){
        return authService.loginUser(email, password);
    }
}
