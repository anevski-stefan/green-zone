package com.example.backend.service;

import com.example.backend.model.User;

import java.util.Optional;

public interface UserService {
    User createUser(User user);
    User deleteUser(Long id);
}
