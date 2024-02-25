package com.example.backend.mapper;

import com.example.backend.model.User;
import com.example.backend.rest.dto.UserDto;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserMapperImpl implements UserMapper {
    @Override
    public UserDto toUserDto(User user) {
        if (user == null) {
            return null;
        }
        return new UserDto(user.getId(), user.getUsername(), user.getName(), user.getEmail(), user.getAboutMe(), user.getRole());
    }

}