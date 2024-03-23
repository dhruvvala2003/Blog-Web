package com.codeBlogApi.blogapi.repository;

import com.codeBlogApi.blogapi.entitys.Category;
import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.entitys.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PostRepo extends JpaRepository<Post,Integer> {


    List<Post> findByUser11(User u);
    List<Post>findByCategory11(Category category);
    List<Post>findByTitleContaining(String titlee);   // Title is my field name : it fire quert of like : witch match titlee withTitke field

}
