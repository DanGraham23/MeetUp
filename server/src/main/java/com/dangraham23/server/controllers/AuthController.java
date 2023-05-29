package com.dangraham23.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
    public int registerUser(@RequestBody User user){
        return authService.registerUser(user);
    }

    @PostMapping("/login")
    public int loginUser(@RequestBody LoginRequest loginRequest){
        System.out.println(loginRequest);
        return authService.loginUser(loginRequest);
    }
}
