import React from 'react'
import { Button, Card, CardBody, CardHeader, Col, Container, FormGroup, Input, Label, Row } from 'reactstrap'
import { Form } from 'react-router-dom'
import Base from '../component/Base'

const Login = () => {
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

            <form>
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

export default Login
