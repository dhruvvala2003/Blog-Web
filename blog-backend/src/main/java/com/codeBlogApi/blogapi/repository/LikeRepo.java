package com.codeBlogApi.blogapi.repository;

import com.codeBlogApi.blogapi.entitys.LikeCount;
import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.entitys.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LikeRepo extends JpaRepository<LikeCount,Integer> {

    Optional<LikeCount> findByUserAndPost(User user, Post post);
    long countByPost(Post post);
}
