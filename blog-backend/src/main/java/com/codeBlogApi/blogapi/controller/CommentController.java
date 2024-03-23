package com.codeBlogApi.blogapi.controller;

import com.codeBlogApi.blogapi.paylode.ApiResponce;
import com.codeBlogApi.blogapi.paylode.CommentDto;
import com.codeBlogApi.blogapi.services.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/")
public class CommentController {

    @Autowired
    CommentService commentService;


    @PostMapping("post/{postId}/comments")
    ResponseEntity<CommentDto>createComment(@RequestBody  CommentDto commentDto,@PathVariable("postId")Integer postId)
    {

       CommentDto cdto= commentService.createComment(commentDto,postId);
        return new ResponseEntity<>(cdto, HttpStatus.CREATED);

    }

    @DeleteMapping("comments/{cid}")

    ResponseEntity<ApiResponce>deleteComment(@PathVariable Integer cid)
    {
        commentService.deleteComment(cid);
        return new ResponseEntity(new ApiResponce("delete comment sucess fully",true),HttpStatus.OK);

    }

}
