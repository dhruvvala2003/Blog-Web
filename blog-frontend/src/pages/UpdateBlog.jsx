import React, { useEffect, useRef, useState } from 'react'
import { json, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { getCurrentUser } from '../auth'
import { lodePostById, updatePostService } from '../service/PostService'
import { toast } from 'react-toastify'

import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import JoditEditor from 'jodit-react'
import { loadAllCategory } from '../service/CategoryService'
import Base from '../component/Base'

const UpdateBlog = () => {
    
    const editor=useRef(null)
    const [categorys,setCategorys]=useState(['Select Category']);

    const {blogId}=useParams()
    const [user,setUser]=useState({})
    const [post,setPost]=useState(null)

    const nav=useNavigate();

    useEffect(()=>{

            //for lode category
            loadAllCategory().then((data)=>{
                console.log(data)
                setCategorys(data);
               
    
            })
            .catch(error=>{
                console.log(error)
            })

            //for user
            console.log(blogId)
            console.log(getCurrentUser().uid);
            setUser(getCurrentUser())
            
            //for lode post
            lodePostById(blogId).then((data)=>{
                console.log(data)

                setPost({...data,categoryId:data?.category11?.category_Id})
            })
            .catch((error)=>{
                console.log(error)
            })
    },[])

    useEffect(()=>{


            // security check -> url ma random post ni id nakhi ne update post nathi thati ne ...
            if(!post)
            {
                if(user.uid != post?.user11?.id)
                    {
                        console.log("suii")
                        toast.error("thsi is not your post")
                        nav("/")
                    }
            }
        
        
    },[post])

    const handleChange=(e,field)=>{
        setPost({
            ...post,
            [field]:e.target.value
        })
    }


    const updatePost=(e)=>{
            e.preventDefault();

            updatePostService({...post,category11:{category_Id:post.categoryId}},blogId).then((res)=>{
                toast.success("post updated")
            })
            .catch((error)=>{
                toast.error("post can't updated")
                    console.log(error)
                    
            })
    }

    const UpdateHtml=()=>{
        return(

            <div className='wrapper'>
             
            <Card className='shadow'>
                <CardBody>
                    <h3>Update Post From here...</h3>
    
                    <Form onSubmit={updatePost}>
                        <div className='my-3'>
                     
                            <Label for='title'>Post Title</Label>       {/* for ='' & id='' mut be same   */} 
                            <Input type='text' 
                                    id='title' 
                                    placeholder='Enter Here' 
                                    className='rounded-0'
                                    name='title'
                                    value={post.title}
                                    onChange={(e)=>handleChange(e,'title')}
    
                            />
                        </div>
    
                        <div className='my-3'>
                     
                            <Label for='content'>Post Contenet</Label>       {/* for ='' & id='' mut be same   */} 
                            {/* <Input type='textarea' id='contenet' placeholder='Enter Here' className='rounded-0' style={{height:'300px'}}/> */}
    
                            <JoditEditor
                                ref={editor}
                                
                                onChange={newContent=>setPost({...post, content:newContent})}
                                value={post.content}
                            />
                                        
                        </div>
    
                        {/* for file  */}
                        <div  className='mt-3'>
    
                        <Label for='image'>Select Post Banner</Label>
                        <Input id='image' type='file' onChange={''} />
                        </div>
    
                        <div className='my-3'>
                     
                            <Label for='category'>Post Category</Label>       {/* for ='' & id='' mut be same   */} 
                            <Input type='select'
                             id='category'
                              placeholder='Enter Here'
                               className='rounded-0' 
                               name='category_Id'
                               onChange={(e)=>handleChange(e,'categoryId')}
                              
                               value={post.categoryId}
                               >
                            <option disabled value={0}>---select category---</option>
    
                                {/* <option>Programming</option>
                                <option>Bollwood</option>
                                <option>Maths</option>
                                <option>Friction</option> */}
    
                                {
                                    categorys.map((cat )=>(
                                        <option value={cat.category_Id} key={cat.category_Id}>
                                            {cat.category_Title}
                                        </option>
                                    ))
                                }
                            </Input>
                        </div>
    
                        <Container className='text-center'>
                            <Button type='submit' color='primary'>Update Post</Button>
                            <Button type='reset' className="ms-2" color='danger'>Reset Content</Button>
                        </Container>
    
                    </Form>
                </CardBody>
            </Card>
    
           
    
        </div>
        )
    }

  return (

        <Base>


        <Container>

           { post && <UpdateHtml/>  }
        </Container>
        
        </Base>
    
  )
}

export default UpdateBlog
