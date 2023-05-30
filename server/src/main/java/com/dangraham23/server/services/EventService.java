package com.dangraham23.server.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.dangraham23.server.entities.Event;
import com.dangraham23.server.entities.User;
import com.dangraham23.server.repositories.EventRepository;
import com.dangraham23.server.repositories.UserRepository;
import com.dangraham23.server.requests.AddEventRequest;
import com.dangraham23.server.responses.GetEventsResponse;

@Service
public class EventService {
    
    @Autowired
    EventRepository eventRepository;

    @Autowired
    UserRepository userRepository;

    public boolean addEvent(AddEventRequest eventRequest){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                if (foundUser.isPresent()){
                    var user = foundUser.get();
                    if (user.getId() != eventRequest.getHost_id() || eventRequest.getHost_id() == eventRequest.getGuest_id()) return false;
                        User host = userRepository.findById(eventRequest.getHost_id())
                        .orElseThrow(() -> new IllegalArgumentException("Invalid host user ID"));
                        User guest = userRepository.findById(eventRequest.getGuest_id())
                        .orElseThrow(() -> new IllegalArgumentException("Invalid guest user ID"));
                        Event event = Event.builder()
                        .title(eventRequest.getTitle())
                        .startDate(eventRequest.getStartDate())
                        .endDate(eventRequest.getEndDate())
                        .description(eventRequest.getDescription())
                        .host(host)
                        .guest(guest)
                        .build();
                        System.out.println("*****" + event.toString());
                    eventRepository.save(event);
                    return true;
                }
            }
        }
        return false;
    }

    public List<GetEventsResponse> getEvents(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                if (foundUser.isPresent()){
                    var user = foundUser.get();
                    var userId = user.getId();
                    Optional<List<Event>> foundEvents = eventRepository.findAllByHostId(userId);
                    if (foundEvents.isPresent()){
                        List<Event> events =  foundEvents.get();
                        List<GetEventsResponse> responseEvents = new ArrayList<>();
                        for (Event event : events) {
                            GetEventsResponse response = GetEventsResponse.builder()
                                    .id(event.getId())
                                    .title(event.getTitle())
                                    .startDate(event.getStartDate())
                                    .endDate(event.getEndDate())
                                    .description(event.getDescription())
                                    .host_id(event.getHost().getId())
                                    .guest_id(event.getGuest().getId())
                                    .host_email(event.getHost().getEmail())
                                    .guest_email(event.getGuest().getEmail())
                                    .build();
                            responseEvents.add(response);
                        }
                        return responseEvents;
                    }
                }
            }
        }
        return new ArrayList<GetEventsResponse>();
    }

    public boolean deleteEvent(Integer id){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication.isAuthenticated()) {
            Object principal = authentication.getPrincipal();
            if (principal instanceof UserDetails) {
                UserDetails userDetails = (UserDetails) principal;
                var userEmail = userDetails.getUsername();
                Optional<User> foundUser = userRepository.findByEmail(userEmail);
                Optional<Event> foundEvent = eventRepository.findById(id);
                if (foundUser.isPresent() && foundEvent.isPresent()){
                    var user = foundUser.get();
                    var event = foundEvent.get();
                    if (user.getId() != event.getHost().getId()) return false;
                    eventRepository.deleteById(id);
                    return true;
                }
            }
        }
        return false;
    }
}
