import React, { useEffect,useState } from 'react'
import { lodeAllPost } from '../service/PostService'
import {Row,Col, Container, Pagination, PaginationItem, PaginationLink, Toast} from 'reactstrap'
import Post from './Post';
import { toast } from 'react-toastify'

const NewFeed = () => {

  const [Postcontent,setPostContent]=useState({
    content:[],
    totalPages:'',
    pageSize:'',
    lastPage:false,
    totalElement:'',
    pageNumber:''
  });


  useEffect(()=>{

    changePage(0)
  },[])

  const changePage=(pageNumber=0,pageSize=5)=>{

        if(pageNumber>Postcontent.pageNumber && Postcontent.lastPage)
          {
            return;
          }

           if(pageNumber<Postcontent.pageNumber && Postcontent.pageNumber==0)
          {
            return;
          }

          if(pageNumber<0)
            {
              return;
            }

    lodeAllPost(pageNumber,pageSize).then((data)=>{
      console.log(data);
      setPostContent(data);
      window.scroll(0,0)

  })
  .catch(error=>{
    
    console.log(error)
    toast.warn("Faild to lode Post")
  });

  }

  return (
    <div className="container-fluid">

      <Row>
          <Col md={
              {
                size:10,
                offset:1
              }
          }> 
          </Col>

      </Row>
    
      
            {
              (Postcontent.content).map((post)=>{
                 return <Post post={post}  key={post.post_id}  />
                  
              })
            }

          <Container className='mt-3'>

          <Pagination>

            <PaginationItem  onClick={()=>changePage(Postcontent.pageNumber-1)} disabled={Postcontent.pageNumber==0}>
              <PaginationLink Previous >
                Previous
              </PaginationLink>
            </PaginationItem>

            {
              [...Array(Postcontent.totalPages)].map((item,index)=>{

               return( 
                    <PaginationItem key={index} onClick={()=>changePage(index)}  active={index===Postcontent.pageNumber}>
                        <PaginationLink>
                            {index+1}
                        </PaginationLink>
                     </PaginationItem>

              )})
            }

            <PaginationItem onClick={()=>changePage(Postcontent.pageNumber+1)} disabled={Postcontent.lastPage}>
              <PaginationLink Next >
              Next
              </PaginationLink>
            </PaginationItem>

          </Pagination>

          </Container>

    </div>
  )
}

export default NewFeed
