package com.codeBlogApi.blogapi.serviceImpl;

import com.codeBlogApi.blogapi.exceptions.ResourceNotFoundException;
import com.codeBlogApi.blogapi.paylode.UserDto;
import com.codeBlogApi.blogapi.entitys.User;
import com.codeBlogApi.blogapi.repository.UserRepo;
import com.codeBlogApi.blogapi.services.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UserServiceImple implements UserService {


    @Autowired
    UserRepo userRepo;

    @Autowired
    ModelMapper modelMapper;   // use for converting one type obj to another tyepe obj ... exp : user to userdto


    @Override
    public UserDto createUser(UserDto udto) {

        User u=this.dtoToUser(udto);
        userRepo.save(u);

       return this.userToUserDto(u);

    }

    @Override
    public UserDto updateUser(UserDto udto, Integer uid) {
        User u=this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("user","id",uid));

        u.setName(udto.getName());
        u.setAbout(udto.getAbout());
        u.setEmail(udto.getEmail());
        u.setPassword(udto.getPassword());
        userRepo.save(u);

        return userToUserDto(u);
    }

    @Override
    public UserDto getUserBYiD(Integer uid) {
        User u=this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("user","id",uid));

        return this.userToUserDto(u);

    }

    @Override
    public List<UserDto> getAllUser() {
        List<User>ulist=userRepo.findAll();

       List<UserDto> ud =ulist.stream().map(u->this.userToUserDto(u)).collect(Collectors.toList());
        return ud;
    }

    @Override
    public void deleteUser(Integer uid) {

        User u=this.userRepo.findById(uid).orElseThrow(()->new ResourceNotFoundException("user","id",uid));
        userRepo.delete(u);
    }



    User dtoToUser(UserDto udto)
    {

        User u=modelMapper.map(udto,User.class);

//        User u=new User();
//        u.setName(udto.getName());
//        u.setAbout(udto.getAbout());
//        u.setEmail(udto.getEmail());
//        u.setPassword(udto.getPassword());

        return  u;


    }

    UserDto userToUserDto(User u)
    {

        UserDto udto=modelMapper.map(u,UserDto.class);
//        UserDto udto=new UserDto();
//        udto.setName(u.getName());
//        udto.setAbout(u.getAbout());
//        udto.setEmail(u.getEmail());
//        udto.setPassword(u.getPassword());

        return  udto;


    }
}
