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

import com.dangraham23.server.requests.AddEventRequest;
import com.dangraham23.server.responses.GetEventsResponse;
import com.dangraham23.server.services.EventService;

@RestController
@RequestMapping("/api/v1/event")
public class EventController {
    
    @Autowired
    EventService eventService;

    @PostMapping("/")
    public boolean addEvent(@RequestBody AddEventRequest eventRequest){
        return eventService.addEvent(eventRequest);
    }

    @GetMapping("/")
    public List<GetEventsResponse> getEvents(){
        return eventService.getEvents();
    }

    @DeleteMapping("/{id}")
    public boolean deleteEvent(@PathVariable("id") Integer id){
        System.out.println(id);
        return eventService.deleteEvent(id);
    }
}
