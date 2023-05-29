package com.dangraham23.server.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dangraham23.requests.AddEventRequest;
import com.dangraham23.responses.GetEventsResponse;
import com.dangraham23.server.services.EventService;

@RestController
@RequestMapping("/api/v1/event")
public class EventController {
    
    @Autowired
    EventService eventService;

    //Add an event with the host and guest
    //The current auth context should be the host id
    @PostMapping("/")
    public boolean addEvent(@RequestBody AddEventRequest eventRequest){
        return eventService.addEvent(eventRequest);
    }

    //Get all events where the current user is either a guest or host
    //The current auth context should be the host id/guest id
    @GetMapping("/")
    public List<GetEventsResponse> getEvents(){
        return eventService.getEvents();
    }

    //Remove the current event id
    //The current auth context should be the host id of the event
    @DeleteMapping("/{id}")
    public boolean deleteEvent(@PathVariable("id") Integer id){
        System.out.println(id);
        return eventService.deleteEvent(id);
    }
}
