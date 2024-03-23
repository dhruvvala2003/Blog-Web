package com.codeBlogApi.blogapi.paylode;

import jakarta.validation.constraints.*;

public class UserDto {
    int id;

    @NotEmpty
    @Size(message = "name must be greaterthen 4 char.")
    String name;

    @NotBlank
            @Size(min = 3,max = 10,message = "password must b/w 3 to 10 char.")
    String password;
    @Email(message = "enter valid email ")
    String email;
    @NotNull
    String about;
    public UserDto(){

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }


}
