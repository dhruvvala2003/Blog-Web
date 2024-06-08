import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import { loadAllCategory } from '../service/CategoryService'
import JoditEditor from 'jodit-react';
import { toast } from 'react-toastify';
import { doCreatePost } from '../service/PostService';
import { getCurrentUser } from '../auth';

const AddPost = () => {

    // jodi editoe is use in this


    const [categorys,setCategorys]=useState(['Select Category']);
    const [user,setUser]=useState(undefined);

    const editor = useRef(null);
	

    const [post,setPost]=useState({
    
        // same as dto var.
        "title":'',
        "content":'',
        "category_Id":''
    })

    //for totle & category id vhange
    const fieldChange=(e)=>{

            setPost({...post,[e.target.name]:e.target.value})
            
    }

    //for content field change using jodit editor
    const contenetFieldChange=(data)=>{
        setPost({...post,'content':data});
    }


    // handle submit event
    const createPost=(e)=>{
        e.preventDefault()
        
            if(post.title.trim()==='' || post.content.trim()==='' ||post.category_Id.trim()==='')
            {
                alert("Require to Fill All Details")
                return;
            }

            //submit form details on server
            
            post['userId']=user.uid

            doCreatePost(post).then((data)=>{

                toast.success("post created");
                // console.log(data);

                setPost({
                    title:'',
                    content:'',
                    category_Id:''
                })
            })
            .catch(error=>{
                
                toast.warn("post not created")
                console.log(error);
            });
}


    useEffect(()=>{

        setUser(getCurrentUser())

        loadAllCategory().then((data)=>{
            console.log(data)
            setCategorys(data);
           

        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    

  return (
    <div className='wrapper'>
           
        <Card className='shadow'>
            <CardBody>
                <h3>What Goinging In your Mind ?</h3>

                <Form onSubmit={createPost}>
                    <div className='my-3'>
                 
                        <Label for='title'>Post Title</Label>       {/* for ='' & id='' mut be same   */} 
                        <Input type='text' 
                                id='title' 
                                placeholder='Enter Here' 
                                className='rounded-0'
                                name='title'
                                onChange={(e)=>fieldChange(e)}

                        />
                    </div>

                    <div className='my-3'>
                 
                        <Label for='content'>Post Contenet</Label>       {/* for ='' & id='' mut be same   */} 
                        {/* <Input type='textarea' id='contenet' placeholder='Enter Here' className='rounded-0' style={{height:'300px'}}/> */}

                        <JoditEditor
                            ref={editor}
                            value={post.content}
                            onChange={contenetFieldChange}
                        />
                                    
                    </div>

                    <div className='my-3'>
                 
                        <Label for='category'>Post Category</Label>       {/* for ='' & id='' mut be same   */} 
                        <Input type='select'
                         id='category'
                          placeholder='Enter Here'
                           className='rounded-0' 
                           name='category_Id'
                           onChange={(e)=>fieldChange(e)}
                           defaultValue={0}
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
                        <Button type='submit' color='primary'>Create Post</Button>
                        <Button type='reset' className="ms-2" color='danger'>Reset Content</Button>
                    </Container>

                </Form>
            </CardBody>
        </Card>

       

    </div>
  )
}

export default AddPost
