import React from 'react'
import Base from '../component/Base'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { Form } from 'react-router-dom'

const SignUp = () => {
  return (
    <div>
    <Base>

    <Container>
      <Row className='mt-3'>

        <Col sm={{size:6,offset:3}}>

          <Card color='dark' outline>

           <CardHeader >
              <h3>Fill All Details For Registration...</h3>
          </CardHeader>

          <CardBody>

            {/* creating form of signup page */}

            <form>
                  {/* name field   */}
                  <FormGroup>
                    <Label for="name">
                      Enter Name
                    </Label>
                    <Input
                      
                      placeholder="Enter Name"
                      type="text"
                      id='name'
                    />
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
                    />
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
                    />
                  </FormGroup>

                  <Container className='text-center'>
                      <Button color='dark' className='mt-2'>Register</Button>
                      <Button color='secondary' type='reset' className='ms-2 mt-2'>Reset</Button>
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
