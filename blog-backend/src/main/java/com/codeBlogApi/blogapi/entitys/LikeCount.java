package com.codeBlogApi.blogapi.entitys;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

@Entity
public class LikeCount {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int lid;



    @ManyToOne
    Post post;

    @ManyToOne
    User user;

    public LikeCount(User user, Post post) {
        this.user = user;
        this.post = post;
    }

    public  LikeCount(){

    }


    //



    public int getLid() {
        return lid;
    }

    public void setLid(int lid) {
        this.lid = lid;
    }


    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }



    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
