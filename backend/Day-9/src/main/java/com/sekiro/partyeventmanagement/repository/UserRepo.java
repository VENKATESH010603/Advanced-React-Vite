package com.sekiro.partyeventmanagement.repository;

import java.util.Optional;

import com.sekiro.partyeventmanagement.models.User;

public interface UserRepo extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
