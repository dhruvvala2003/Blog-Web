package com.codeBlogApi.blogapi.controller;

import com.codeBlogApi.blogapi.config.AppConstant;
import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.paylode.ApiResponce;
import com.codeBlogApi.blogapi.paylode.PostDto;
import com.codeBlogApi.blogapi.paylode.PostResponce;
import com.codeBlogApi.blogapi.services.FileService;
import com.codeBlogApi.blogapi.services.PostService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
public class PostController {

    @Autowired
    PostService postService;

    @Autowired
    FileService fileService;

    @Value("${project.image}")
    String path;


    // store post by uid & cid
    @PostMapping("user/{userId}/category/{categoryId}/post")
    ResponseEntity<PostDto>createPost(@RequestBody PostDto pdto,
                                      @PathVariable Integer userId,
                                      @PathVariable Integer categoryId){


     PostDto postDto=   postService.createPost(pdto,userId,categoryId);
       return new ResponseEntity<>(postDto, HttpStatus.CREATED);


    }



    //getPostBy User
    @GetMapping("user/{uid}/post")
    ResponseEntity<List<PostDto>>getPostByuser(@PathVariable Integer uid)
    {
         List<PostDto> PostDtolist=  postService.getPostByUser(uid);
            return  new ResponseEntity<>(PostDtolist,HttpStatus.OK);

    }

    //getPost by category
    @GetMapping("user/{cid}/category")
    ResponseEntity<List<PostDto>>getPostByCategory(@PathVariable Integer cid)
    {
        List<PostDto> PostDtolist=  postService.getPostByCategory(cid);
        return  new ResponseEntity<>(PostDtolist,HttpStatus.OK);

    }


    //geetAllPost

    @GetMapping("posts")
    ResponseEntity<PostResponce>getAllpost(@RequestParam(value = "pageNumber",defaultValue = AppConstant.PAGE_NUMBER,required = false)Integer pageNumber,
                                           @RequestParam(value = "pageSize",defaultValue = AppConstant.PAGE_SIZE,required = false)Integer pageSize,
                                           @RequestParam(value = "sortBy",defaultValue = AppConstant.SORT_BY,required = false)String  sortBy,
                                           @RequestParam(value = "sortDir",defaultValue = AppConstant.SORT_DIR,required = false)String sortDir
    )
    {
//        List<PostDto>postDtoList=postService.getAllPost(pageNumber,pageSize);
//        return  new ResponseEntity<>(postDtoList,HttpStatus.OK);
        PostResponce postResponce= postService.getAllPost(pageNumber,pageSize,sortBy,sortDir);
        return new ResponseEntity<>(postResponce,HttpStatus.OK);


    }

    //get Post By Id

    @GetMapping("/post/{pid}")
    ResponseEntity<PostDto>getPostbyId(@PathVariable Integer pid)
    {
        PostDto pd=postService.getPostById(pid);
        return new ResponseEntity<>(pd,HttpStatus.OK);
    }



    //delete post

    @DeleteMapping("/posts/{pid}")
    ResponseEntity<ApiResponce>deleetPost(@PathVariable Integer pid)
    {
        postService.deletePost(pid);
        return new ResponseEntity<>(new ApiResponce("post deleted sucesfully",true),HttpStatus.OK);
    }

    //update post

    @PutMapping("/post/{pid}")

    ResponseEntity<PostDto>updatePost(@RequestBody PostDto pdto,@PathVariable Integer pid)
    {
       PostDto updto= postService.updatePost(pdto,pid);
       return new ResponseEntity<>(updto,HttpStatus.OK);

    }


    //serch by keyword
    @GetMapping("posts/serch/{keyword}")

    ResponseEntity<List<PostDto>>getPostByKeyword(@PathVariable("keyword")String  keyword)
    {
        List<PostDto>postDtoList=postService.serchPost(keyword);
        return new ResponseEntity<>(postDtoList,HttpStatus.OK);

    }


    //update iamges in post

    @PostMapping("post/image/uplode/{postId}")

    ResponseEntity<PostDto>upfdateImage(@RequestParam("image")MultipartFile image, @PathVariable Integer postId) throws IOException {

        PostDto postDto=postService.getPostById(postId);

        String fileName=fileService.uplodeImage(path,image);

        postDto.setImageName(fileName);
       PostDto pdto =postService.updatePost(postDto,postId);

       return  new ResponseEntity<>(pdto,HttpStatus.OK);

    }
    //get post

    @GetMapping(value = "post/image/{imageName}", produces = MediaType.IMAGE_JPEG_VALUE)
    public void getImage(@PathVariable String imageName, HttpServletResponse response)throws IOException
    {
        InputStream resource=fileService.getResource(path,imageName);
        response.setContentType(MediaType.IMAGE_JPEG_VALUE);
        StreamUtils.copy(resource,response.getOutputStream());
    }

}
