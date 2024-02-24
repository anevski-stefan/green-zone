package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Entity
@Table(name="users")
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    @Column(nullable = false, unique = true, length = 50)
    private String email;
    @Column(nullable = false, length = 50)
    private String password;
    private String aboutMeText;

    @Column(columnDefinition = "integer default 0")
    private Integer points;

    public User(String name) {
        this.username = name;
    }

    public User(String username, String email, String password, String aboutMeText) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.aboutMeText = aboutMeText;
        this.points = 0;
    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.points = 0;
    }
}