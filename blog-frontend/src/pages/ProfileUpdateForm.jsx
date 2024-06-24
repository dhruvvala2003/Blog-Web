import React, { useEffect, useState } from 'react'
import { json, useLocation } from 'react-router-dom'
import Base from '../component/Base'
import { Button, Card, CardBody, CardText, Container, Form, Input, Label } from 'reactstrap'
import { updateProfile } from '../service/UserService'
import { toast } from 'react-toastify'

const ProfileUpdateForm = () => {
    const location=useLocation()
    const [user,setUser]=useState({})
    const [details,setDetails]=useState({
        name:'',
        email:'',
        about:'',
        password:''
    })
       
    useEffect(()=>{
            setUser(location.state)
            console.log(location.state)
        },[])

    const fieldChange=(e)=>{

        setDetails({...details,[e.target.name]:e.target.value})

    }

    const updateDetails=(e)=>{

            e.preventDefault();

            updateProfile(details,user.id).then((res)=>{
                toast.success("profile updated sucessfully ")
            })
            .catch((error)=>{
                toast.error("profile can't update")
                console.log(error)

            })
    }

  return (
    
            <Base>
                  
                <Container className='mt-4'>

                    <Card>
                        <CardBody>
                            <h3 className='text-center'>Update Your Details Here</h3>      
                        
                            <Form onSubmit={updateDetails}>

                                {/* name */}
                                <div className='my-3'>
                            
                                    <Label for='name'>Profile Name</Label>       {/* for ='' & id='' mut be same   */} 
                                    <Input type='text' 
                                            id='name' 
                                            placeholder='Enter Name' 
                                            className='rounded-0'
                                            name='name'
                                            onChange={(e)=>fieldChange(e)}

                                    />

                                </div>

                                {/* email */}
                                <div className='my-3'>
                            
                                    <Label for='email'>Profile Email</Label>       {/* for ='' & id='' mut be same   */} 
                                    <Input type='email' 
                                            id='email' 
                                            placeholder='Enter Email' 
                                            className='rounded-0'
                                            name='email'
                                            onChange={(e)=>fieldChange(e)}

                                    />
                                    
                                </div>

                                   {/* password */}

                                   <div className='my-3'>
                            
                                        <Label for='password'>Profile Password</Label>       {/* for ='' & id='' mut be same   */} 
                                        <Input type='password' 
                                                id='password' 
                                                placeholder='Enter Password' 
                                                className='rounded-0'
                                                name='password'
                                                onChange={(e)=>fieldChange(e)}

                                        />

                                    </div>


                                {/* about */}

                                <div className='my-3'>
                            
                                    <Label for='about'>Profile About</Label>       {/* for ='' & id='' mut be same   */} 
                                    <Input type='text' 
                                            id='about' 
                                            placeholder='Enter About You' 
                                            className='rounded-0'
                                            name='about'
                                            onChange={(e)=>fieldChange(e)}

                                    />
                                    
                                </div>


                            <CardText className='text-center'>
                            <Button type='submit' className='text-center' color='warning'>Submit</Button>
                        
                            </CardText>
                             
                        </Form>

                       
                        </CardBody>

                    </Card>
                  
                </Container>
            </Base>
    
  )
}

export default ProfileUpdateForm
