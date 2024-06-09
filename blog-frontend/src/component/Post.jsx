import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'
import { getCurrentUser, isLogin } from '../auth';

import { toast } from 'react-toastify';

const Post = ({deletePost={deletePost}, post={ title:"this is post title",content:"this is default content"}}) => {

    const nav=useNavigate();

    const [user,setUser]=useState(null);
    const [login,setLogin]=useState(false);

  useEffect(()=>{
    // console.log(getCurrentUser())
    // console.log(isLogin())
    console.log(post)
    console.log(getCurrentUser())
    setUser(getCurrentUser())
    setLogin(isLogin())

  },[])

  const handlePost=()=>{

    console.log(post);
      const tmp={
       ...post

      }
      nav("/post",{state:tmp});

  }



  
  return (
    <div>
        <Card className='border-0 shadow-sm mt-3'>
            <CardBody>
                <h1>{post.title}</h1>
                <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,50)+"..."}}>
                    {/* {post.content.substring(0,40)}... */}
                </CardText>

                <Button onClick={handlePost} >Read More</Button>

               {
                login && (user.uid == post.user11.id)? <Button color='danger' className='ms-2' onClick={()=>deletePost(post)}>Delete</Button> :''
               }

               {
                login && (user.uid == post.user11.id)? <Button tag={Link} to={`/update-blog/${post.post_id}`} color='warning' className='ms-2' >Update</Button> :''
              
               }
                
            </CardBody>


        </Card>
    </div>
  )
}

export default Post
