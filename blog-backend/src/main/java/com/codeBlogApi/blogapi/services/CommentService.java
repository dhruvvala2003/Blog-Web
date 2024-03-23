package com.codeBlogApi.blogapi.services;

import com.codeBlogApi.blogapi.paylode.CommentDto;

public interface CommentService {

    CommentDto createComment(CommentDto cdto,Integer postId);
    void deleteComment(Integer comentId);

}
