import React from 'react'
import { Button, Card, CardBody, CardText } from 'reactstrap'

const Post = ({post={title:"this is post title",content:"this is default content"}}) => {



  return (
    <div>
        <Card className='border-0 shadow-sm mt-3'>
            <CardBody>
                <h1>{post.title}</h1>
                <CardText dangerouslySetInnerHTML={{__html:post.content.substring(0,50)+"..."}}>
                    {/* {post.content.substring(0,40)}... */}
                </CardText>

                <Button  >Read More</Button>
            </CardBody>


        </Card>
    </div>
  )
}

export default Post
