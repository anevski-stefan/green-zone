package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/add")
    public User createUser(@RequestBody String name) {
        User user = new User(name);
        return userService.createUser(user);
    }

    @GetMapping("/user/{userId}")
    public Optional<User> getUser(@PathVariable Long userId) {
        return this.userService.findById(userId);
    }

    @GetMapping
    public List<User> getUsers(){
        return this.userService.findAll();
    }
}
