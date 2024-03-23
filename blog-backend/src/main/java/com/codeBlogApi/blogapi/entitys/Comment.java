package com.codeBlogApi.blogapi.entitys;

import jakarta.persistence.*;

@Entity
public class Comment {

        @Id
         @GeneratedValue(strategy = GenerationType.IDENTITY)
        Integer id;

        String content;

        @ManyToOne
        Post post;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }
}
