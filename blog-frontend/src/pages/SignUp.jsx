import React, { useEffect, useState } from 'react'
import Base from '../component/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, FormFeedback, FormGroup, Input, Label, Row } from 'reactstrap'
import { Form, json } from 'react-router-dom'
import { signUpfun } from '../service/UserService'
import { Bounce, toast } from 'react-toastify'
const SignUp = () => {

  const [data,setData]=useState({
    name:'',
    email:'',
    password:'',
    about:''
  })

  const [error,setError]=useState({
    errors:{},
    isError:false,
  })

  //handle changes in i/p fields

  const handleChange=(e,field)=>{
    //dynamicaly lode data 
    setData({...data,[field]:e.target.value});
  }



  //handling reset 
  const handleReset=()=>{
      setData({
        name:'',
        email:'',
        password:'',
        about:''
      })
  }

  //handling submit
  const handleSubmit=(e)=>{

    e.preventDefault();

    console.log("submit: ",data);

    //client side validation...
   

    // connect with server...
    signUpfun(data).then((responce)=>{
      console.log(responce)
      console.log("sucessfulll")

      toast.success(' Register Sucessfull!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

      setData({
      name:'',
      email:'',
      password:'',
      about:''})
    }).catch((error1)=>{
      console.log(error1)
      console.log("error occure........")

        //handling error...
        
        setError({
          errors:error1,
          isError:true
        })
    })


  }


  return (
    <div>
    <Base>

      {/* {JSON.stringify(data)} */}
    <Container>
      <Row className='mt-3'>

        <Col sm={{size:6,offset:3}}>

          <Card color='dark' outline>

           <CardHeader >
              <h3>Fill All Details For Registration...</h3>
          </CardHeader>

          <CardBody>

            {/* creating form of signup page */}

            <form onSubmit={(e)=>handleSubmit(e)}>
                  {/* name field   */}
                  <FormGroup>
                    <Label for="name">
                      Enter Name
                    </Label>
                    <Input
                      
                      placeholder="Enter Name"
                      type="text"
                      id='name'
                      value={data.name}
                      onChange={(e)=>handleChange(e,'name')}
                      invalid={error.errors?.response?.data?.name ? true:false} // if responce conaten name then it show error 
                    />
                    <FormFeedback>          
                    {/* error meseg print karava mate */}
                      {error.errors?.response?.data?.name }     
                    </FormFeedback>

                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
              
                    <Label for="email">
                      Enter Email
                    </Label>
                    <Input
                      placeholder="Enter Email"
                      type="email"
                      id='email'
                      value={data.email}
                      onChange={(e)=>handleChange(e,'email')}
                      invalid={error.errors?.response?.data?.email ? true:false} // if responce conaten name then it show error 

                    />

                    <FormFeedback>          
                    {/* error meseg print karava mate */}
                      {error.errors?.response?.data?.email }     
                    </FormFeedback>

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
                      value={data.password}
                      onChange={(e)=>handleChange(e,'password')}
                      invalid={error.errors?.response?.data?.password ? true:false} // if responce conaten name then it show error 

                    />

                    <FormFeedback>          
                    {/* error meseg print karava mate */}
                      {error.errors?.response?.data?.password }     
                    </FormFeedback>

                  </FormGroup>

                  {/* About field  */}
                  <FormGroup>
              
                    <Label for="about">
                      Enter About
                    </Label>
                    <Input
                      placeholder="Enter about"
                      type="textarea"
                      id='about'
                      style={{height:"10rem"}}
                      value={data.about}
                      onChange={(e)=>handleChange(e,'about')}
                      invalid={error.errors?.response?.data?.about ? true:false} // if responce conaten name then it show error 

                    />
                     <FormFeedback>          
                    {/* error meseg print karava mate */}
                      {error.errors?.response?.data?.password }     
                    </FormFeedback>
                    
                  </FormGroup>

                  <Container className='text-center'>
                      <Button  color='dark' className='mt-2'>Register</Button>
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

export default SignUp
