package com.codeBlogApi.blogapi.controller;

import com.codeBlogApi.blogapi.paylode.ApiResponce;
import com.codeBlogApi.blogapi.paylode.CategoryDto;
import com.codeBlogApi.blogapi.services.CategoryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {

    @Autowired
    CategoryService cgs;


    @PostMapping("/")
    ResponseEntity<CategoryDto>create(@Valid @RequestBody CategoryDto cdto)
    {
       CategoryDto Createdcdto= cgs.createCatogry(cdto);

        return new ResponseEntity<>(Createdcdto, HttpStatus.CREATED);

    }

    @PutMapping("/{cid}")
    ResponseEntity<CategoryDto>update(@Valid @RequestBody CategoryDto cdto, @PathVariable("cid") Integer cid)
    {
        CategoryDto Createdcdto= cgs.updateCatogry(cdto,cid);

        return new ResponseEntity<>(Createdcdto, HttpStatus.OK);

    }


    @DeleteMapping("/{cid}")
    ResponseEntity<ApiResponce>delete(@PathVariable("cid") Integer cid)
    {
       cgs.deleteCategory(cid);

        return new ResponseEntity<ApiResponce>(new ApiResponce("category delete sucessfully",true), HttpStatus.OK);

    }


    @GetMapping("/{cid}")
    ResponseEntity<CategoryDto>getById(@PathVariable("cid") Integer cid)
    {
        CategoryDto Createdcdto= cgs.getCatoeogy(cid);

        return new ResponseEntity<>(Createdcdto, HttpStatus.OK);

    }


    @GetMapping("/")
    ResponseEntity<List<CategoryDto>>create()
    {
        List<CategoryDto> Createdcdtolist= cgs.getAllCategory();

        return new ResponseEntity<>(Createdcdtolist, HttpStatus.OK);

    }
}

