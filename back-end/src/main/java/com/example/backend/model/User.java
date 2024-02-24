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
    private String name;
    private String email;
    private String password;
    private String aboutMeText;

    @Column(columnDefinition = "integer default 0")
    private String points;

    public User(String name) {
        this.name = name;
    }

    public User(String name, String email, String password, String aboutMeText) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.aboutMeText = aboutMeText;
        this.points = String.valueOf(0);
    }

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.points = String.valueOf(0);
    }
}