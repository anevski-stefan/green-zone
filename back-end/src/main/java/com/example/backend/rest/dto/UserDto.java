package com.example.backend.rest.dto;

import java.time.ZonedDateTime;

public record UserDto(Long id, String username, String name, String email, String role, String aboutMe) {

    public record OrderDto(String id, String description, ZonedDateTime createdAt) {
    }
}
