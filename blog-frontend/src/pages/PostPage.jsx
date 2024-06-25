import React, { useEffect, useState } from 'react'
import Base from '../component/Base'
import { Button, Card, CardBody, CardText, Col, Container, Input, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import { createComment } from '../service/PostService'
import { toast } from 'react-toastify'
import { getCurrentUser, isLogin } from '../auth'
import { getUser } from '../service/UserService'
import axios from 'axios'


const PostPage = () => {

    // for post like
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);


    const location=useLocation();

    const [data,setData]=useState({})
    const [user,setUser]=useState({})

    const [comment,setComment]=useState({
        content:''
    })

    useEffect(()=>{

        console.log("posttt",location.state)
        setData(location.state)

        if(!isLogin())
        {
            
            console.log("not login")
            return;
        }

         getUser((getCurrentUser().uid)).then((res)=>{
            console.log("user",res);
            
        const tmp=async()=>{
         //like code :
         const response = await axios.get(`http://localhost:8080/api/like/${location?.state.post_id}/liked/${res?.id}`);
         setLiked(response.data);

            setUser(res);

        }

        tmp();

        })
        .catch((error)=>{
            console.log(error);

        })

    },[])

    
         //lode all likes default
    useEffect(()=>{

        const tmpfun=async()=>{
        const response1 = await axios.get(`http://localhost:8080/api/like/${location?.state.post_id}/count`);
         setLikeCount(response1.data);
        }

        tmpfun();

 
    },[])




    const getDate=(number)=>{
        return new Date(number).toLocaleDateString();

    }
   
    const handleComment=()=>{

            if(! isLogin())
            {
                toast.error("You Need To Login First")
                return
            }

           if((comment.content).trim() ==='')
            {
                return
            }

        comment.content= user.name + " : "+ comment.content

        createComment(comment,data.post_id).then((res)=>{

            console.log("sucessfully added comment")
            toast.success("comment added sucessfully")

            setData({
                ...data,
                comments:[...data.comments,res.data]

            })

            setComment({
                content:''

        })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    

    
      const handleToggleLike = async () => {

            if(!isLogin())
                {
                    toast.warn("Login first")
                    console.log("not login")
                    return;
                }
                
        const response = await axios.post(`http://localhost:8080/api/like/${data?.post_id}/toggle/${user.id}`, null );
        setLikeCount(response.data);
        setLiked(!liked);
      };



    
  return (
    
    <Base>
        <Container className='mt-4'>

            <Row>
                <Col md={{size:12}}>
                    

                    <Card className='ps-2 mt-3'>

                        <CardBody>
                            <CardText>Posted By <b>{(data.user11)?.name}</b> on <b>{getDate(data.addDate)}</b></CardText>
                            <CardText>{(data.category11)?.category_Title}</CardText>
                            
                                <button onClick={handleToggleLike} style={{ color: liked ? 'green' : 'black' }}>
                                {liked ? 'Unlike' : 'Like'} ({likeCount})
                                </button>
                            <div  className='divider'  style={{width:'100%',height:'2px', background:'#e2e2e2'}}>

                            </div>
                            <CardText className='mt-3'><h1>{data.title}</h1></CardText>

                            <div className='image-container mt-4 ' style={{maxWidth:'50%'}}>
                                <img className="img-fluid" src={'http://localhost:8080/api/v1/post/image/'+data.imageName}></img>
                            </div>

                            <CardText  className="mt-5" dangerouslySetInnerHTML={{__html:data.content}}></CardText>
                        </CardBody>
                    </Card>


                </Col>
            </Row>

            {/* for comments... */}

            <Row className='mt-4'>

                <Col md={
                    {
                            size:9,
                            offset:1
                    }
                }>

                    <h3>Comments: {(data.comments)?.length}</h3>

                    {
                        (data.comments)?.map((c,index)=>{

                                return(
                                    <Card key={index} className='mt-2'>
                                        <CardBody>
                                            <CardText>
                                            {c.content}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                    
                                )
                        })
                    }

                    {/* add comment  */}
                                 <Card  className='mt-4'>
                                        <CardBody>
                                            <Input type='textarea' 
                                            placeholder='Enter Comment Here'
                                            onChange={(e)=>setComment({content:e.target.value})}
                                            value={comment.content}
                                             />

                                            <Button onClick={handleComment} className='mt-2' color='primary'>Submit</Button>
                                        </CardBody>
                                 </Card>

                </Col>
            </Row>
        </Container>
    </Base>
  )
}

export default PostPage
