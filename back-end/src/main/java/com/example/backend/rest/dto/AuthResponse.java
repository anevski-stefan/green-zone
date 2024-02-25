package com.example.backend.rest.dto;

import com.example.backend.model.User;

public record AuthResponse(String accessToken, User user) {
}