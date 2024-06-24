package com.codeBlogApi.blogapi.paylode;


import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class PostDto {

    Integer post_id;

    public Integer getPost_id() {
        return post_id;
    }

    public void setPost_id(Integer post_id) {
        this.post_id = post_id;
    }



    String title;
    String content;

//    int likecount;
//    int dislikecount;

//    public int getLikecount() {
//        return likecount;
//    }
//
//    public void setLikecount(int likecount) {
//        this.likecount = likecount;
//    }
//
//    public int getDislikecount() {
//        return dislikecount;
//    }
//
//    public void setDislikecount(int dislikecount) {
//        this.dislikecount = dislikecount;
//    }

    public CategoryDto getCategory11() {
        return category11;
    }

    public void setCategory11(CategoryDto category11) {
        this.category11 = category11;
    }

    public UserDto getUser11() {
        return user11;
    }

    public void setUser11(UserDto user11) {
        this.user11 = user11;
    }

    String imageName;

    Date addDate;
    CategoryDto category11;
    UserDto user11;

    Set<CommentDto>comments=new HashSet<>();

    public Set<CommentDto> getComments() {
        return comments;
    }

    public void setComments(Set<CommentDto> comments) {
        this.comments = comments;
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






    PostDto()
    {

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
}
