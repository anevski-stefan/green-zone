package com.example.backend.mapper;

import com.example.backend.model.User;
import com.example.backend.rest.dto.UserDto;

public interface UserMapper {

    UserDto toUserDto(User user);
}