package com.codeBlogApi.blogapi.controller;

import com.codeBlogApi.blogapi.services.LikeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/like")
public class LikeController {

    @Autowired
    LikeService likeService;

    @PostMapping("/{postId}/toggle/{userId}")
    public ResponseEntity<Long> toggleLike(@PathVariable int postId, @PathVariable int userId) {
        long likeCount = likeService.likePost(postId, userId);
        return ResponseEntity.ok(likeCount);
    }


    @GetMapping("/{postId}/liked/{userId}")
    public ResponseEntity<Boolean> isPostLiked(@PathVariable int postId, @PathVariable int userId) {
        return ResponseEntity.ok(likeService.isPostLikedByUser(postId, userId));
    }

    @GetMapping("/{postId}/count")
    public ResponseEntity<Integer> getLikeCount(@PathVariable int postId) {
        return ResponseEntity.ok(likeService.getLikeCount(postId));
    }
}
