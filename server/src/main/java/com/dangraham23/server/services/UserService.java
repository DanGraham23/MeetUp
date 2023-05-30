package com.dangraham23.server.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.dangraham23.server.entities.User;
import com.dangraham23.server.repositories.UserRepository;
import com.dangraham23.server.responses.GetUserResponse;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;

    public GetUserResponse getUser(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                if (foundUser.isPresent()){
                    var user = foundUser.get();
                    GetUserResponse userResponse = GetUserResponse.builder()
                    .id(user.getId())
                    .firstName(user.getFirstName())
                    .lastName(user.getLastName())
                    .email(user.getEmail())
                    .address(user.getAddress())
                    .city(user.getCity())
                    .country(user.getCountry())
                    .state(user.getState())
                    .phoneNumber(user.getPhoneNumber())
                    .build();
                    return userResponse;
                }
            }
        }
        return null;
    }
    
    public boolean updateUser(){
        return false;
    }

    public boolean addFriend(Integer friendId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                Optional<User> foundFriend = userRepository.findById(friendId);
                if (foundUser.isPresent() && foundFriend.isPresent()){
                    var user = foundUser.get();
                    if (user.getId() == friendId) return false;
                    var friend = foundFriend.get();
                    List<User> friends = user.getFriends();
                    if (friends.contains(friend)) return false;
                    friends.add(friend);
                    userRepository.save(user);
                    return true;
                }
            }
        }
        return false;
    }

    public boolean removeFriend(Integer friendId){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                Optional<User> foundFriend = userRepository.findById(friendId);
                if (foundUser.isPresent() && foundFriend.isPresent()){
                    var user = foundUser.get();
                    if (user.getId() == friendId) return false;
                    var friend = foundFriend.get();
                    if (!user.getFriends().remove(friend)) return false;
                    userRepository.save(user);
                    return true;
                }
            }
        }
        return false;
    }
}
