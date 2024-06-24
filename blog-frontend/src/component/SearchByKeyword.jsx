import React, { useState } from 'react'
import { Button } from 'reactstrap';
import './SearchCss.css';
import { FcSearch } from "react-icons/fc";
import { searchPost } from '../service/PostService';
import { useNavigate } from 'react-router-dom';

const SearchByKeyword = () => {
    const [word,setWord]=useState('');
  const [post,setPost]=useState([]);

  const nav=useNavigate();

    const change=(e)=>{
        setWord(e.target.value);

    }

    const handleEvenet=(e)=>{
        e.preventDefault();
      
        if(word.trim()==="")
          {
            alert("Enter Valid Input")
            return;
          }

        searchPost(word).then((res)=>{
          console.log("search post",res.data);
          setPost(res);

          const tmp=res.data;

          nav("/serchImpl", { state: { tmp } });

        }).catch((e)=>{
          console.log("serchpost error",e);

        })

    }

    


  return (
    <div>
      
      <div className='serchContainer'>

      <input type='text' className='inputSerch' placeholder='search' onChange={change} ></input>
      <FcSearch  onClick={(e)=>handleEvenet(e)} className='searchBtn' />

     
      </div>
    </div>
  )
}

export default SearchByKeyword
