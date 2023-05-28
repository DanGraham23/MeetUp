package com.dangraham23.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dangraham23.server.entities.User;
import com.dangraham23.server.services.UserService;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Autowired
    UserService userService;
    
    @GetMapping("/")
    public User getUser(int id){
        return userService.getUser(id);
    }

    @PutMapping("/update-settings")
    public boolean updateUser(int id, User user){
        return userService.updateUser(id, user);
    }

    @PostMapping("/add-friend")
    public boolean addFriend(int userId, int friendId){
        return userService.addFriend(userId, friendId);
    }

    @DeleteMapping("/delete-friend")
    public boolean removeFriend(int userId, int friendId){
        return userService.removeFriend(userId, friendId);
    }
}
