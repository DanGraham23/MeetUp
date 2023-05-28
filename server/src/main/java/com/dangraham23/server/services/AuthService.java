package com.dangraham23.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dangraham23.server.entities.User;
import com.dangraham23.server.repositories.UserRepository;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    public int registerUser(User user){
        return 1;
    }

    public int loginUser(String email, String password){
        return 1;
    }
}
