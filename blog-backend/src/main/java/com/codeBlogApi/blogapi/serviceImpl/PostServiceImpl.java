package com.codeBlogApi.blogapi.serviceImpl;

import com.codeBlogApi.blogapi.entitys.Category;
import com.codeBlogApi.blogapi.entitys.User;
import com.codeBlogApi.blogapi.entitys.Post;
import com.codeBlogApi.blogapi.exceptions.ResourceNotFoundException;
import com.codeBlogApi.blogapi.paylode.PostDto;
import com.codeBlogApi.blogapi.paylode.PostResponce;
import com.codeBlogApi.blogapi.repository.CategoryRepo;
import com.codeBlogApi.blogapi.repository.PostRepo;
import com.codeBlogApi.blogapi.repository.UserRepo;
import com.codeBlogApi.blogapi.services.PostService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    PostRepo postRepo;

    @Autowired
    ModelMapper mmp;

    @Autowired
    UserRepo userRepo;

    @Autowired
    CategoryRepo categoryRepo;



    @Override
    public PostDto createPost(PostDto postDto,Integer uid,Integer cid) {

        Category category=categoryRepo.findById(cid).orElseThrow(()->new ResourceNotFoundException("Category","Category id",cid));
        User user=userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("User","User id",uid));

       Post p= mmp.map(postDto,Post.class);
        p.setAddDate(new Date());
        p.setImageName("default.png");
        p.setCategory11(category);
        p.setUser11(user);

       Post newPost= postRepo.save(p);

        return mmp.map(newPost,PostDto.class);


    }

    @Override
    public PostDto updatePost(PostDto postDto, Integer pid) {

        Post p=postRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Post","Post Id",pid));

        Category c= this.categoryRepo.findById(postDto.getCategory11().getCategory_Id()).get();

        p.setTitle(postDto.getTitle());
        p.setContent(postDto.getContent());
        p.setImageName(postDto.getImageName());
        p.setCategory11(c);
        Post upadtedPost=postRepo.save(p);

        return mmp.map(p,PostDto.class);

    }

    @Override
    public void deletePost(Integer postId) {

        Post p=postRepo.findById(postId).orElseThrow(()->new ResourceNotFoundException("Post","Post Id",postId));

        postRepo.delete(p);
    }

    @Override
    public PostResponce getAllPost(Integer pageNo, Integer pageSize,String sortBy,String sortDir) {

//        List<Post>postList=postRepo.findAll();

//        Sort sort=null;
//
//        if(sortDir.equalsIgnoreCase("asc"))
//        {
//            sort=Sort.by(sortBy).ascending();
//        }
//        else{
//            sort=Sort.by(sortBy).descending();
//        }

//        System.out.println(sort);

         Pageable p= PageRequest.of(pageNo,pageSize);
//        Pageable p= PageRequest.of(pageNo,pageSize,Sort.by(sortBy));
//        Pageable p= PageRequest.of(pageNo,pageSize,sort);

      Page<Post>pagePost= this.postRepo.findAll(p);
       List<Post>allPost=pagePost.getContent();

        List<PostDto>postDtoList=allPost.stream().map((p1)->mmp.map(p1,PostDto.class)).collect(Collectors.toList());

        PostResponce postResponce=new PostResponce();
        postResponce.setContent(postDtoList);
        postResponce.setPageNumber(pagePost.getNumber());
        postResponce.setPageSize(pagePost.getSize());
        postResponce.setLastPage(pagePost.isLast());
        postResponce.setTotalPages(pagePost.getTotalPages());
        postResponce.setTotalElement(pagePost.getTotalElements());

        return postResponce;


    }

    @Override
    public PostDto getPostById(Integer pid) {

        Post p=postRepo.findById(pid).orElseThrow(()->new ResourceNotFoundException("Post","Post Id",pid));

        PostDto pdto=mmp.map(p,PostDto.class);
        return pdto;

    }

    @Override
    public List<PostDto> getPostByCategory(Integer categoryId) {

        Category cat=this.categoryRepo.findById(categoryId).orElseThrow(()->new ResourceNotFoundException("category","category id ", categoryId));

        List<Post>postList=postRepo.findByCategory11(cat);
        List<PostDto> postDtoList=postList.stream().map((p)->mmp.map(p,PostDto.class)).collect(Collectors.toList());
        return postDtoList;

    }

    @Override
    public List<PostDto> getPostByUser(Integer userId) {

        User us=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundException("User","User id", userId));


        List<Post>postList=postRepo.findByUser11(us);
        List<PostDto> postDtoList=postList.stream().map((p)->mmp.map(p,PostDto.class)).collect(Collectors.toList());
        return postDtoList;

    }

    @Override
    public List<PostDto> serchPost(String keyword) {
        List<Post> postList=postRepo.findByTitleContaining(keyword);

        List<PostDto> postDtoList=postList.stream().map((p)->mmp.map(p,PostDto.class)).collect(Collectors.toList());
        return postDtoList;
    }
}
