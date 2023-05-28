package com.dangraham23.server.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dangraham23.server.entities.Event;
import com.dangraham23.server.repositories.EventRepository;

@Service
public class EventService {
    
    @Autowired
    EventRepository eventRepository;

    public boolean addEvent(Event event){
        return true;
    }

    public boolean deleteEvent(int id){
        return true;
    }
}
