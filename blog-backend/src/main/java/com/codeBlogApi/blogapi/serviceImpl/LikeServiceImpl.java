package com.codeBlogApi.blogapi.serviceImpl;

import com.codeBlogApi.blogapi.entitys.LikeCount;
import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.entitys.User;
import com.codeBlogApi.blogapi.exceptions.ResourceNotFoundException;
import com.codeBlogApi.blogapi.repository.LikeRepo;
import com.codeBlogApi.blogapi.repository.PostRepo;
import com.codeBlogApi.blogapi.repository.UserRepo;
import com.codeBlogApi.blogapi.services.LikeService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Optional;

@Service
public class LikeServiceImpl implements LikeService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    UserRepo userRepo;

    @Autowired
    LikeRepo likeRepo;


    public long likePost(int postId, int userId) {
        User user = userRepo.findById(userId).orElseThrow();
        Post post = postRepo.findById(postId).orElseThrow();
        Optional<LikeCount> existingLike = likeRepo.findByUserAndPost(user, post);
        if (existingLike.isPresent()) {
            likeRepo.delete(existingLike.get());
        } else {
            likeRepo.save(new LikeCount(user, post));
        }
        return likeRepo.countByPost(post);
    }



    public boolean isPostLikedByUser(int postId, int userId) {
        User user = userRepo.findById(userId).orElseThrow();
        Post post = postRepo.findById(postId).orElseThrow();
        return likeRepo.findByUserAndPost(user, post).isPresent();
    }

    @Override
    public Integer getLikeCount(int pid) {
        Post post = postRepo.findById(pid).orElseThrow();
        return (int) likeRepo.countByPost(post);
    }
}
