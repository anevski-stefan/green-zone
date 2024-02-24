package com.example.backend.service;

import com.example.backend.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {
    User createUser(User user);
    User deleteUser(Long id);

    User findByEmail(String email);
    Optional<User> findById(Long id);
    List<User> findAll();
}
