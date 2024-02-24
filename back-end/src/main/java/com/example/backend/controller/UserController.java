package com.example.backend.controller;

import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/register")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public User createUser(@RequestBody User user) {
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

    @RequestMapping(value = "/login", method = RequestMethod.OPTIONS)
    public ResponseEntity<User> handleOptionsRequestForLogin() {
        return ResponseEntity.ok().build();
    }

    @RequestMapping(value = "/register", method = RequestMethod.OPTIONS)
    public ResponseEntity<User> handleOptionsRequestForRegister() {
        return ResponseEntity.ok().build();
    }
}

