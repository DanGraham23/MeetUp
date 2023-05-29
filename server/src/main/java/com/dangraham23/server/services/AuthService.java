package com.dangraham23.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dangraham23.server.controllers.LoginRequest;
import com.dangraham23.server.entities.User;
import com.dangraham23.server.repositories.UserRepository;

@Service
public class AuthService {
    @Autowired
    UserRepository userRepository;

    public int registerUser(User user){
        if (userRepository.findByEmail(user.getEmail()) != null) return -1;

        userRepository.save(user);
        return user.getId();
    }

    public int loginUser(LoginRequest loginRequest){
        User user = userRepository.findByEmail(loginRequest.getEmail());
        if (user == null) return -1;
        if (!user.getPassword().equals(loginRequest.getPassword())) return -1;
        return user.getId();     
    }
}
