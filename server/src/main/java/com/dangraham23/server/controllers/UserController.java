package com.dangraham23.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dangraham23.server.responses.GetUserResponse;
import com.dangraham23.server.services.UserService;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserService userService;
    
    @GetMapping("/")
    public GetUserResponse getUser(){
        return userService.getUser();
    }

    @PutMapping("/")
    public boolean updateUser(){
        return userService.updateUser();
    }

    @PostMapping("/add-friend/{id}")
    public boolean addFriend(@PathVariable("id") Integer friendId){
        return userService.addFriend(friendId);
    }

    @DeleteMapping("/delete-friend/{id}")
    public boolean removeFriend(@PathVariable("id") Integer friendId){
        return userService.removeFriend(friendId);
    }
}
