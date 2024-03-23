package com.codeBlogApi.blogapi.paylode;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class CategoryDto {

    Integer category_Id;

    @NotBlank
    @Size(min=3,message = "title must be more then 2")
    String category_Title;


    @NotBlank
    @Size(min=3,message = "description must be more then 2")
    String category_Description;



    public Integer getCategory_Id() {
        return category_Id;
    }

    public void setCategory_Id(Integer category_Id) {
        this.category_Id = category_Id;
    }

    public String getCategory_Title() {
        return category_Title;
    }

    public void setCategory_Title(String category_Title) {
        this.category_Title = category_Title;
    }

    public String getCategory_Description() {
        return category_Description;
    }

    public void setCategory_Description(String category_Description) {
        this.category_Description = category_Description;
    }



    CategoryDto()
    {

    }



}
