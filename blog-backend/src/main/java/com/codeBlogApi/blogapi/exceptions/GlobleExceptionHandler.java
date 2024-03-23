package com.codeBlogApi.blogapi.exceptions;

import com.codeBlogApi.blogapi.paylode.ApiResponce;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobleExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ApiResponce>resourceNotFoundException(ResourceNotFoundException exp)
    {
        String msg=exp.getMessage();
        ApiResponce apiResponce=new ApiResponce(msg,false);
        return new ResponseEntity<ApiResponce>(apiResponce, HttpStatus.NOT_FOUND);

    }


    @ExceptionHandler(MethodArgumentNotValidException.class)

    public ResponseEntity<Map<String ,String >>methodArgumentNotValidException(MethodArgumentNotValidException ex)
    {
        Map<String ,String >mp=new HashMap<>();

        ex.getBindingResult().getAllErrors().forEach(error->{
            String fildName= ((FieldError)error).getField();
            String msg=error.getDefaultMessage();

            mp.put(fildName,msg);

        });
        return new ResponseEntity<>(mp,HttpStatus.BAD_REQUEST);

    }

}
