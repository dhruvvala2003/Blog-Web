import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Container, Form, Input, Label } from 'reactstrap'
import { loadAllCategory } from '../service/CategoryService'
import JoditEditor from 'jodit-react';

const AddPost = () => {

    const [categorys,setCategorys]=useState([]);

    const editor = useRef(null);
	const [content, setContent] = useState('');

    useEffect(()=>{

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

                <Form>
                    <div className='my-3'>
                 
                        <Label for='title'>Post Title</Label>       {/* for ='' & id='' mut be same   */} 
                        <Input type='text' id='title' placeholder='Enter Here' className='rounded-0'/>
                    </div>

                    <div className='my-3'>
                 
                        <Label for='content'>Post Contenet</Label>       {/* for ='' & id='' mut be same   */} 
                        {/* <Input type='textarea' id='contenet' placeholder='Enter Here' className='rounded-0' style={{height:'300px'}}/> */}

                        <JoditEditor
                            ref={editor}
                            value={content}
                            onChange={newContent =>setContent(newContent)}
                        />
                                    
                    </div>

                    <div className='my-3'>
                 
                        <Label for='category'>Post Category</Label>       {/* for ='' & id='' mut be same   */} 
                        <Input type='select' id='category' placeholder='Enter Here' className='rounded-0' >

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
                        <Button color='primary'>Create Post</Button>
                        <Button  className="ms-2" color='danger'>Reset Content</Button>
                    </Container>

                </Form>
            </CardBody>
        </Card>

        {content}

    </div>
  )
}

export default AddPost
