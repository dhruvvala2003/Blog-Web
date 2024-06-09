import axios from "axios";

export const loadAllCategory=async()=>{

    const res= await axios.get('http://localhost:8080/api/v1/category/')
    return res.data 
}

// get category vice service

export const lodePostCategoryVice=(cid)=>{

        return axios.get(`http://localhost:8080/api/v1/user/${cid}/category`).then((res)=>res.data)

}                                                          