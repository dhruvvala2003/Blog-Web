package com.codeBlogApi.blogapi.serviceImpl;

import com.codeBlogApi.blogapi.entitys.Category;
import com.codeBlogApi.blogapi.exceptions.ResourceNotFoundException;
import com.codeBlogApi.blogapi.paylode.CategoryDto;
import com.codeBlogApi.blogapi.repository.CategoryRepo;
import com.codeBlogApi.blogapi.services.CategoryService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CategoryServiceImpl implements CategoryService {


    @Autowired
    CategoryRepo cgRepo;

    @Autowired
    ModelMapper mmp;


    @Override
    public CategoryDto createCatogry(CategoryDto cdto) {

//        System.out.println(cdto.getCategory_Description());
//        System.out.println(cdto.getCategory_Title());
        Category cg=mmp.map(cdto, Category.class);
//        System.out.println(cg.getCategory_Title());
//        System.out.println(cg.getCategory_Description());

        cgRepo.save(cg);

        return mmp.map(cg,CategoryDto.class);


    }

    @Override
    public CategoryDto updateCatogry(CategoryDto cdto, Integer cdtoId) {

        Category cg=cgRepo.findById(cdtoId).orElseThrow(()-> new ResourceNotFoundException("category","Category Id Not Found",cdtoId));


        cg.setCategory_Title(cdto.getCategory_Title());
        cg.setCategory_Description(cdto.getCategory_Title());

        cgRepo.save(cg);

        return  mmp.map(cg,CategoryDto.class);

    }

    @Override
    public void deleteCategory(Integer cdtoId) {

        Category cg=cgRepo.findById(cdtoId).orElseThrow(()-> new ResourceNotFoundException("category","Category Id Not Found",cdtoId));

        cgRepo.delete(cg);


    }

    @Override
    public CategoryDto getCatoeogy(Integer cdtoId) {
        Category cg=cgRepo.findById(cdtoId).orElseThrow(()-> new ResourceNotFoundException("category","Category Id Not Found",cdtoId));

        return mmp.map(cg,CategoryDto.class);


    }

    @Override
    public List<CategoryDto> getAllCategory() {

        List<Category> cglist=cgRepo.findAll();

       List<CategoryDto> cdtplist=cglist.stream().map((cg)->mmp.map(cg,CategoryDto.class)).collect(Collectors.toList());
        return cdtplist;

    }
}
