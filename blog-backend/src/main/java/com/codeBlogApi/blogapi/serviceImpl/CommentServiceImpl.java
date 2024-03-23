package com.codeBlogApi.blogapi.serviceImpl;

import com.codeBlogApi.blogapi.entitys.Comment;
import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.exceptions.ResourceNotFoundException;
import com.codeBlogApi.blogapi.paylode.CommentDto;
import com.codeBlogApi.blogapi.paylode.PostDto;
import com.codeBlogApi.blogapi.repository.CommentRepo;
import com.codeBlogApi.blogapi.repository.PostRepo;
import com.codeBlogApi.blogapi.services.CommentService;
import com.codeBlogApi.blogapi.services.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

    @Autowired
    PostRepo postRepo;


    @Autowired
    CommentRepo commentRepo;

    @Autowired
    ModelMapper mp;


    @Override
    public CommentDto createComment(CommentDto cdto, Integer postId) {

        Post post=postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("post","postId",postId));

        Comment comment=mp.map(cdto,Comment.class);

        comment.setPost(post);

       Comment upCommet= commentRepo.save(comment);

        return mp.map(upCommet,CommentDto.class);


    }

    @Override
    public void deleteComment(Integer comentId) {

        Comment comment=commentRepo.findById(comentId).orElseThrow(()->new ResourceNotFoundException("comment","commentId ",comentId));
    }
}
