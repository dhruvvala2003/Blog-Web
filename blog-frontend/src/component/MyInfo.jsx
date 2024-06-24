import React, { useEffect, useState } from 'react'
import Base from './Base'
import { useNavigate, useParams } from 'react-router-dom'
import { getUser } from '../service/UserService';
import { toast } from 'react-toastify';
import { Button, ButtonToggle, Card, CardBody, CardFooter, Col, Container, Row, Table } from 'reactstrap';
import { getCurrentUser } from '../auth';

const MyInfo = () => {
  const {uid}=useParams();

  const [user,setUser]=useState({});

  const [currentUser,setCurrentUser]=useState({})
  const nav=useNavigate();

  useEffect(()=>{

    getUser(uid).then((data)=>{
      setUser(data)
      console.log(data)
      setCurrentUser(getCurrentUser())
    })
    .catch((error)=>{
      toast.error("user can't lode")
    })
    
  },[])

  const handleProfile=()=>{
    
    const tmp={
      ...user

     }

      nav('/updateProfile',{
        state:tmp
      })
  }

  return (
    <div>
       <Base>

          <Row>

            <Col md={{size:6,offset:3}}>

              <Card className='mt-2 shadow-sm'>
                  <CardBody>
                    <h3 className='text-uppecase'>User Information</h3>

                    <Container className='text-center'>
                        <img style={{maxWidth:'150px',maxHeight:'150px'}} className='' src='https://imgs.search.brave.com/QADxA7bcCoftmpGrt-VAsHSzeHhmZC7bXb8iFO-7yec/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYXJ0cy5jb20v/ZmlsZXMvMTAvRGVm/YXVsdC1Qcm9maWxl/LVBpY3R1cmUtVHJh/bnNwYXJlbnQtSW1h/Z2UucG5n'/>
                    </Container>

                    <Table hover className='mt-5 text-center'>
                      <tbody>
                        <tr>
                          <td>Id</td>
                          <td>{user.id}</td>
                        </tr>

                        <tr>
                          <td>User Name</td>
                          <td>{user.name}</td>
                        </tr>

                        <tr>
                          <td>User Email</td>
                          <td>{user.email}</td>
                        </tr>

                        <tr>
                          <td>Abot</td>
                          <td>{user.about}</td>
                        </tr>
                      </tbody>
                    </Table>
                  </CardBody>

                {currentUser.uid==user.id?(
                  <CardFooter className='text-center'>
                    <Button onClick={()=>handleProfile()} color='warning'>Update Profile</Button>
                  </CardFooter>
                  
                ):''
                }
              </Card>
            </Col>
          </Row>

    </Base>
    </div>
  )
}

export default MyInfo
