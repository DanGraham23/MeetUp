package com.dangraham23.server.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dangraham23.server.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    
    Optional<User> findByEmail(String email);

    // @Query("SELECT u FROM users LEFT JOIN friend ON users.id = friend.friend_id AND :userId != friend.user.id AND users.email LIKE %:email% AND friend.user.id = :userId")
    // List<User> findByEmailContainingAndNotFriends(@Param("email") String email,@Param("userId") Integer userId);
}
