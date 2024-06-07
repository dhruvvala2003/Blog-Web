import axios from "axios";

export const loadAllCategory=async()=>{

    const res= await axios.get('http://localhost:8080/api/v1/category/')
    return res.data 
}