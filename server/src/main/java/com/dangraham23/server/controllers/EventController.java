package com.dangraham23.server.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dangraham23.server.entities.Event;
import com.dangraham23.server.services.EventService;

@RestController
@RequestMapping("/api/v1/event")
public class EventController {
    
    @Autowired
    EventService eventService;

    @PostMapping("/")
    public boolean addEvent(@RequestBody Event event){
        return eventService.addEvent(event);
    }

    @GetMapping("/")
    public boolean getEvents(){
        return true;
    }

    @DeleteMapping("/")
    public boolean deleteEvent(@RequestBody int id){
        return eventService.deleteEvent(id);
    }
}
