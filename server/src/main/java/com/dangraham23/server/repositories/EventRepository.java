package com.dangraham23.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dangraham23.server.entities.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    
}
