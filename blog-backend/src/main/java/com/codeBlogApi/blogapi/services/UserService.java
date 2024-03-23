package com.codeBlogApi.blogapi.services;

import com.codeBlogApi.blogapi.paylode.UserDto;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto udo);
    UserDto updateUser(UserDto udto, Integer uid);

    UserDto getUserBYiD(Integer uid);

    List<UserDto>getAllUser();
    void deleteUser(Integer uid);

}
