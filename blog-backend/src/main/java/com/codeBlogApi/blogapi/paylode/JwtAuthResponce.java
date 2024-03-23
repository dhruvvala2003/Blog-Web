package com.codeBlogApi.blogapi.paylode;


import lombok.Data;


public class JwtAuthResponce {
    String token;

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
