package com.codeBlogApi.blogapi.controller;

import com.codeBlogApi.blogapi.services.UserService;
import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import  com.codeBlogApi.blogapi.paylode.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    UserService us;

    @PostMapping("/")
    ResponseEntity<UserDto> createUser(@Valid @RequestBody  UserDto udto)

    {
           UserDto ud=us.createUser(udto);
          return new ResponseEntity<>(ud, HttpStatus.CREATED);
    }

    @PutMapping("/{uid}")
    ResponseEntity<UserDto> updateUser(@Valid  @RequestBody UserDto udto , @PathVariable("uid") Integer uid)
    {
        UserDto updatedUser=us.updateUser(udto, uid);
        return  ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{uid}")
    ResponseEntity<?>deleteUser(@PathVariable("uid") Integer uid)
    {
        this.us.deleteUser(uid);
        return new ResponseEntity<>(Map.of("message","User Deleted Sucessfully"),HttpStatus.OK);
    }

    @GetMapping("/")
    ResponseEntity<List<UserDto>> getUser()
    {
        return ResponseEntity.ok(this.us.getAllUser());

    }

    @GetMapping("/{uid}")
    ResponseEntity<UserDto> getUser(@PathVariable("uid") Integer uid)
    {
        return ResponseEntity.ok(this.us.getUserBYiD(uid));

    }
}
