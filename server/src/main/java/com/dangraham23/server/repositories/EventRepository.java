package com.dangraham23.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dangraham23.server.entities.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    Optional<List<Event>> findAllByHostId(Integer id);

}
