package com.dangraham23.server.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.dangraham23.server.auth.RegisterRequest;
import com.dangraham23.server.entities.User;
import com.dangraham23.server.repositories.UserRepository;
import com.dangraham23.server.responses.GetFriendResponse;
import com.dangraham23.server.responses.GetUserResponse;

@Service
public class UserService {
    
    @Autowired
    UserRepository userRepository;
    
    @Autowired
    PasswordEncoder passwordEncoder;

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
    
    public boolean updateUser(RegisterRequest updateRequest){
        System.out.println(updateRequest);
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                if (!userEmail.equals(updateRequest.getEmail())){
                    Optional<User> existingUserWithEmail = userRepository.findByEmail(updateRequest.getEmail());
                    if (existingUserWithEmail.isPresent()) return false;
                }
                if (foundUser.isPresent()){
                    var user = foundUser.get();
                    var hashedPassword = user.getPassword();
                    var requestPassword = updateRequest.getPassword();
                    boolean matchingPassword = passwordEncoder.matches(requestPassword, hashedPassword);
                    if (matchingPassword){
                        user.setFirstName(updateRequest.getFirstName());
                        user.setLastName(updateRequest.getLastName());;
                        user.setPhoneNumber(updateRequest.getPhoneNumber());
                        user.setAddress(updateRequest.getAddress());
                        user.setCountry(updateRequest.getCountry());
                        user.setState(updateRequest.getState());
                        user.setCity(updateRequest.getCity());
                        user.setEmail(updateRequest.getEmail());
                        userRepository.save(user);
                    }else{
                        return false;
                    }
                }
            }
        }
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

    public List<GetFriendResponse> getFriends(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                if (foundUser.isPresent()){
                    var user = foundUser.get();
                    List<GetFriendResponse> friends = new ArrayList<>();
                    for (User friend : user.getFriends()){
                        var friendResponse = GetFriendResponse.builder()
                        .email(friend.getEmail())
                        .phoneNumber(friend.getPhoneNumber())
                        .firstName(friend.getFirstName())
                        .lastName(friend.getLastName())
                        .id(friend.getId())
                        .build();
                        friends.add(friendResponse);
                    }
                    return friends;
                }
            }
        }
        return null;
    }

    public List<GetFriendResponse> searchUsers(String email){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                if (foundUser.isPresent()){
                    var user = foundUser.get();
                    List<User> nonFriendUsers = userRepository.findMatchingUsers(user.getId(), email);
                    List<GetFriendResponse> nonFriends = new ArrayList<>();
                    for (User nonFriend : nonFriendUsers) {
                        var friendResponse = GetFriendResponse.builder()
                                .email(nonFriend.getEmail())
                                .phoneNumber(nonFriend.getPhoneNumber())
                                .firstName(nonFriend.getFirstName())
                                .lastName(nonFriend.getLastName())
                                .id(nonFriend.getId())
                                .build();
                            nonFriends.add(friendResponse);
                    }
                    return nonFriends;
                }
            }
        }
        return null;
    }
}
