package com.example.backend.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name="users")
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String second_name;
    private String email;
    private Integer points = 0;
    private String imagePath;
    private String aboutMeText;

    @ElementCollection
    private List<String> interests;

    public User(String first_name, String second_name, String email, String imagePath, String aboutMeText, List<String> interests) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.email = email;
        this.imagePath = imagePath;
        this.aboutMeText = aboutMeText;
        this.interests = interests;
    }

    public User(String first_name, String second_name, String email, String imagePath, String aboutMeText) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.email = email;
        this.imagePath = imagePath;
        this.aboutMeText = aboutMeText;
    }

    public User(String first_name, String second_name, String email, String imagePath) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.email = email;
        this.imagePath = imagePath;
    }

    public User(String first_name, String second_name, String email, String aboutMeText, List<String> interests) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.email = email;
        this.aboutMeText = aboutMeText;
        this.interests = interests;
    }

    public User(String first_name, String second_name, String email, List<String> interests) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.email = email;
        this.interests = interests;
    }

    public User(String first_name, String second_name, String email) {
        this.first_name = first_name;
        this.second_name = second_name;
        this.email = email;
    }
}
