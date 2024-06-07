import React, { useState } from 'react'
import {  Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { Form, useNavigate } from 'react-router-dom'
import Base from '../component/Base'
import axios from 'axios'
import { toast } from 'react-toastify'
import { doLogin, isLogin } from '../auth'

const Login = () => {

  const nav=useNavigate();

  const [loginDetails,setLoginDetails]=useState(
    {
    email:"",
    password:""
    }
  )

  const handleReset=()=>{
      setLoginDetails({
        email:"",
        password:""
      })
  }

  const handleChange=(e,type)=>{
        setLoginDetails({...loginDetails,
                        [type]:e.target.value}); 
  }

  const handleFormSubmit=async(e)=>{
    e.preventDefault();

    console.log(loginDetails.email, loginDetails.password);


      
     const res= await axios.get("http://localhost:8080/login");
     console.log(res);

     const data=res.data;

     var flag=false;

     data.forEach(user => {
      
        if(user.email===loginDetails.email && user.password===loginDetails.password)
          {
            doLogin(loginDetails.email,loginDetails.password);

              toast.success("login sucesfulll");
              nav("/")
              flag=true;
          }
     });

     if(flag==false)
      {
        toast.warn("please enter valid details")
      }

  };


  return (
    
    <div>
    <Base>

    <Container >
      <Row className='mt-3'>

        <Col sm={{size:6,offset:3}}>

          <Card color='dark' outline>

           <CardHeader >
              <h3>Fill All Details For Login...</h3>
          </CardHeader>

          <CardBody>

            {/* creating form of signup page */}

            <form onSubmit={handleFormSubmit}>
                  {/* email field */}
                  <FormGroup>
              
                    <Label for="email">
                      Enter Email
                    </Label>
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      id='email'
                      value={loginDetails.email}
                      onChange={(e)=>handleChange((e),'email')}
                    />
                  </FormGroup>

                  {/* password field  */}
                  <FormGroup>
              
                    <Label for="password">
                      Enter Password
                    </Label>
                    <Input
                      placeholder="Enter Password"
                      type="password"
                      id='password'
                      value={loginDetails.password}
                      onChange={(e)=>handleChange((e),'password')}
                    />
                  </FormGroup>

              

                  <Container className='text-center'>
                      <Button color='dark' className='mt-2'>Login</Button>
                      <Button  onClick={handleReset} color='secondary' type='reset' className='ms-2 mt-2'>Reset</Button>
                  </Container>

            </form>



          </CardBody>
          </Card>




        </Col>
    </Row>

</Container>
    </Base>
    </div>


  )
}

export default Login
