package com.codeBlogApi.blogapi.repository;

import com.codeBlogApi.blogapi.entitys.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepo extends JpaRepository<Category,Integer> {
}
