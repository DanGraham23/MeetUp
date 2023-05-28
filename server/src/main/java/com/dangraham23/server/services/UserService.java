package com.dangraham23.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dangraham23.server.entities.User;
import com.dangraham23.server.repositories.UserRepository;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    public User getUser(int id){
        return new User();
    }
    
    public boolean updateUser(int id, User user){
        return true;
    }

    public boolean addFriend(int userId, int friendId){
        return true;
    }

    public boolean removeFriend(int userId, int friendId){
        return true;
    }
}
