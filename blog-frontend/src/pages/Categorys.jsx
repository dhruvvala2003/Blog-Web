import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../component/Base';
import CategorySideManue from '../component/CategorySideManue';
import { Col, Container, Row } from 'reactstrap';
import Post from '../component/Post';
import { toast } from 'react-toastify';
import { lodePostCategoryVice } from '../service/CategoryService';

const Categorys = () => {

  const {category_Id}=useParams();

  const [post,setPost]=useState([]);

    useEffect(()=>{
      
      lodePostCategoryVice(category_Id).then((res)=>{

          setPost([...res]);
        })
        .catch((error)=>{
          toast.warn("faild to lode categoryies")
          console.log(error)

        })

    },[category_Id]) 
    
  return (  
      <Base>

        <Container>

            <Row>
              <Col md={2} className='border mt-3 pt-3'>
                  <CategorySideManue/>
              </Col>

              <Col md={10}>

                  {
                    post?.map((p,index)=>{
                      return(
                          <Post post={p}/>
                      )

                    })
                  }


                  {
                      post.length<=0? 'No Post In This Ctegories':''
                  }
              </Col>
            </Row>
        </Container>


      </Base>
  )
}

export default Categorys
