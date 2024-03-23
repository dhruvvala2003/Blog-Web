package com.codeBlogApi.blogapi.paylode;

public class ApiResponce {

    String message;

    public ApiResponce(String message, boolean sucess) {
        this.message = message;
        this.sucess = sucess;
    }

    ApiResponce()
    {

    }



    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isSucess() {
        return sucess;
    }

    public void setSucess(boolean sucess) {
        this.sucess = sucess;
    }

    boolean sucess;

}
