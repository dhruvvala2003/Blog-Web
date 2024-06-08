import React, { useEffect, useState } from 'react'
import Base from '../component/Base'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import { useLocation } from 'react-router-dom'

const PostPage = () => {

    const [data,setData]=useState({})


    const location=useLocation();

    useEffect(()=>{
        console.log(location.state)
        setData(location.state)

        
    },[])

    const getDate=(number)=>{
        return new Date(number).toLocaleDateString();

    }
   
  return (
    
    <Base>
        <Container className='mt-4'>

            <Row>
                <Col md={{size:12}}>
                    

                    <Card className='ps-2 mt-3'>

                        <CardBody>
                            <CardText>Posted By <b>{(data.user11)?.name}</b> on <b>{getDate(data.addDate)}</b></CardText>
                            <CardText>{(data.category11)?.category_Title}</CardText>
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
        </Container>
    </Base>
  )
}

export default PostPage
