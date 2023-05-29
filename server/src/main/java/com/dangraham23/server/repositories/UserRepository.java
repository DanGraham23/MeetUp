package com.dangraham23.server.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dangraham23.server.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    User findByEmail(String email);
}
