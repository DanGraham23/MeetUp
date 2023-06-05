package com.dangraham23.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dangraham23.server.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    Optional<User> findByEmail(String email);

    @Query("SELECT u FROM User u " +
    "WHERE u.id <> :userId " +
    "AND u.email LIKE :email% " +
    "AND u NOT IN " +
    "(SELECT u2.friends FROM User u2 WHERE u2.id = :userId)")
    List<User> findMatchingUsers(Integer userId, String email);
}
