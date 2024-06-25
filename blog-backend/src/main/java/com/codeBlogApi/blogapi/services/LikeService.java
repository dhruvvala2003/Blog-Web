package com.codeBlogApi.blogapi.services;

public interface LikeService {

long likePost(int pid,int uid);
boolean isPostLikedByUser(int pid,int uid);
Integer getLikeCount(int pid);

}
