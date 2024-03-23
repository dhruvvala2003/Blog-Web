package com.codeBlogApi.blogapi.services;

import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.paylode.PostDto;
import com.codeBlogApi.blogapi.paylode.PostResponce;

import java.util.List;

public interface PostService {

    //create
    PostDto createPost(PostDto postDto,Integer uid,Integer cid);



    //update
    PostDto updatePost(PostDto postDto,Integer postId);


    //delete

    void deletePost(Integer postId);


    //get all

    PostResponce getAllPost(Integer pageNo, Integer pageSize,String sortBy,String sortDir);

    //get by id
    PostDto getPostById(Integer pid);

    // post by category

    List<PostDto> getPostByCategory(Integer categoryId);


    //post by user
    List<PostDto> getPostByUser(Integer userId);


    // serch post

    List<PostDto> serchPost(String keyword);


}
