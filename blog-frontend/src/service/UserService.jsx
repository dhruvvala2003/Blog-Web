import axios from "axios";

export const signUpfun=(user)=>{

    return axios.post("http://localhost:8080/api/v1/user/",user).then((responce)=>responce.data);//https://localhost:8080/api/v1/auth/register
}

export const getUser=(uid)=>{
    return axios.get(`http://localhost:8080/api/v1/user/${uid}`).then((res)=>res.data);
}

export const updateProfile=(user,uid)=>{
    console.log(user)
    console.log(uid)
    
    return axios.put(`http://localhost:8080/api/v1/user/${uid}`,user).then((res)=>res);

}