//package com.codeBlogApi.blogapi.controller;
//
//import com.codeBlogApi.blogapi.paylode.JwtAuthRequest;
//import com.codeBlogApi.blogapi.paylode.JwtAuthResponce;
//import com.codeBlogApi.blogapi.security.JwtTokenHelper;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.authentication.BadCredentialsException;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.logging.Logger;
//
//@RestController
//@RequestMapping("/api/v1/auth")
//public class AuthController {
//
//    @Autowired
//    private UserDetailsService userDetailsService;
//
//    @Autowired
//    private AuthenticationManager manager;
//
//
//    @Autowired
//    private JwtTokenHelper helper;
//
//    private Logger logger = (Logger) LoggerFactory.getLogger(AuthController.class);
//
//    @Autowired
//    AuthenticationManager authenticationManager;
//
//    @PostMapping("/login")
//    public ResponseEntity<JwtAuthResponce> createToken(@RequestBody JwtAuthRequest request) {
//
//        this.authenticate(request.getUsername(), request.getPassword());
//
//
//        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getUsername());
//        String token = this.helper.generateToken(userDetails);
//
//        JwtAuthResponce response = new JwtAuthResponce();
//        response.setToken(token);
//
//
//        return new ResponseEntity<>(response, HttpStatus.OK);
//    }
//
//    private void authenticate(String email, String password) {
//
//        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
//        try {
//            manager.authenticate(authentication);
//
//
//        } catch (BadCredentialsException e) {
//            throw new BadCredentialsException(" Invalid Username or Password  !!");
//        }
//
//    }
//
//    @ExceptionHandler(BadCredentialsException.class)
//    public String exceptionHandler() {
//        return "Credentials Invalid !!";
//    }
//
//}
