package com.codeBlogApi.blogapi.controller;

import com.codeBlogApi.blogapi.entitys.User;
import com.codeBlogApi.blogapi.paylode.UserDto;
import com.codeBlogApi.blogapi.serviceImpl.UserServiceImple;
import com.codeBlogApi.blogapi.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LoginController {

    @Autowired
    UserService usi;



    @GetMapping("/login")
    List<UserDto> getDetails ()
    {
        return  usi.getAllUser();
    }

}
