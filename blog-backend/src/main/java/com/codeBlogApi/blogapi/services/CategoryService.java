package com.codeBlogApi.blogapi.services;

import com.codeBlogApi.blogapi.paylode.CategoryDto;

import java.util.List;

public interface CategoryService {

    //craete

    CategoryDto createCatogry(CategoryDto cdto);

    //update
    CategoryDto updateCatogry(CategoryDto cdto,Integer cdtoId);

    //delete
    void deleteCategory(Integer cdtoId);

    //get one
    CategoryDto getCatoeogy(Integer cdtoId);

    //get all

    List<CategoryDto>getAllCategory();

}
