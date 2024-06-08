package com.codeBlogApi.blogapi.entitys;

import jakarta.persistence.*;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer post_id;

    @Column(name="post title", length = 100,nullable = false)
    String title;

    @Column(length = 100000)
    String content;

    String imageName;

    Date addDate;


    @ManyToOne
    @JoinColumn(name="Category_ID")
    Category category11;

    @JoinColumn(name = "User_Id")
    @ManyToOne
    User user11;


    @OneToMany(mappedBy = "post",cascade = CascadeType.ALL)
    Set<Comment>comments=new HashSet<>();



    public Set<Comment> getComments() {
        return comments;
    }

    public void setComments(Set<Comment> comments) {
        this.comments = comments;
    }

    public Integer getPost_id() {
        return post_id;
    }

    public void setPost_id(Integer post_id) {
        this.post_id = post_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImageName() {
        return imageName;
    }

    public void setImageName(String imageName) {
        this.imageName = imageName;
    }

    public Date getAddDate() {
        return addDate;
    }

    public void setAddDate(Date addDate) {
        this.addDate = addDate;
    }

    public Category getCategory11() {
        return category11;
    }

    public void setCategory11(Category category11) {
        this.category11 = category11;
    }

    public User getUser11() {
        return user11;
    }

    public void setUser11(User user11) {
        this.user11 = user11;
    }




}
