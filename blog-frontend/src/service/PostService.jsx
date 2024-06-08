import axios from "axios";

export const doCreatePost=(postData)=>{
 
return axios.post(`http://localhost:8080/api/v1/user/${postData.userId}/category/${postData.category_Id}/post`,postData)
    .then((res)=>res.data)
}


export const lodeAllPost=(pageNumber,pageSize)=>{

    // return axios.get("http://localhost:8080/api/v1/posts")
    return axios.get(`http://localhost:8080/api/v1/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .then((res)=>res.data);
}


// uplode comment

export const createComment=(comment,postId)=>{

    return axios.post(`http://localhost:8080/api/v1/post/${postId}/comments`,comment);

}