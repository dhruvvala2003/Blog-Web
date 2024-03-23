package com.codeBlogApi.blogapi.repository;

import com.codeBlogApi.blogapi.entitys.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepo extends JpaRepository<Comment,Integer> {
}
