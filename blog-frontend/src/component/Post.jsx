import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Card, CardBody, CardText } from 'reactstrap'

const Post = ({post={title:"this is post title",content:"this is default content"}}) => {

    const nav=useNavigate();

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
            </CardBody>


        </Card>
    </div>
  )
}

export default Post
