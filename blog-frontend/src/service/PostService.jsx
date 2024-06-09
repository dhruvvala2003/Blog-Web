import axios from "axios";

export const doCreatePost=(postData)=>{
 
return axios.post(`http://localhost:8080/api/v1/user/${postData.userId}/category/${postData.category_Id}/post`,postData)
    .then((res)=>res.data)
}

export const uplodePostImage=(image,post_id)=>{

    let formData=new FormData();
    formData.append("image",image)

    return axios.post(`http://localhost:8080/api/v1/post/image/uplode/${post_id}`,formData,{

        headers:{
            'Content-Type':'multipart/form-data'
        }
    })
    .then((res)=>res.data);
}


export const lodeAllPost=(pageNumber,pageSize)=>{

    // return axios.get("http://localhost:8080/api/v1/posts")
    return axios.get(`http://localhost:8080/api/v1/posts?pageNumber=${pageNumber}&pageSize=${pageSize}`)
    .then((res)=>res.data);
}


//lode post user vice

export const lodePostUserWise=(uid)=>{

    return axios.get(`http://localhost:8080/api/v1/user/${uid}/post`).then((res)=>res.data);

}

//delete post

export const deletePostService=(pid)=>{
    return axios.delete(`http://localhost:8080/api/v1/posts/${pid}`).then((res)=>res.data);

}
// uplode comment

export const createComment=(comment,postId)=>{

    return axios.post(`http://localhost:8080/api/v1/post/${postId}/comments`,comment);

}