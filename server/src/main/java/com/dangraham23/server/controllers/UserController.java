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
    
    //Get the current user information
    //The current auth context should be the user whos profile is being fetched
    @GetMapping("/")
    public User getUser(int id){
        return userService.getUser(id);
    }

    //Update the current user information
    //The current auth context should be the user whos profile is being updated
    @PutMapping("/update-settings")
    public boolean updateUser(int id, User user){
        return userService.updateUser(id, user);
    }

    //Add a friend entry to both the current user and the friend (not a friend request, more of a "following" type of feature)
    //The current auth context should be the user who is sending the request
    @PostMapping("/add-friend")
    public boolean addFriend(int userId, int friendId){
        return userService.addFriend(userId, friendId);
    }

    //Delete a friend entry for both the current user and the friend
    //The current auth context should be the user who is sending the delete request
    @DeleteMapping("/delete-friend")
    public boolean removeFriend(int userId, int friendId){
        return userService.removeFriend(userId, friendId);
    }
}
