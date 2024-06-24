import React, { useEffect,useState } from 'react'
import { deletePostService, lodeAllPost } from '../service/PostService'
import {Row,Col, Container, Pagination, PaginationItem, PaginationLink, Toast} from 'reactstrap'
import Post from './Post';
import { toast } from 'react-toastify'

const NewFeed = () => {

  const [spinner,setSpinner]=useState(true)

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
            setSpinner(false)
            return;

          }

           if(pageNumber<Postcontent.pageNumber && Postcontent.pageNumber==0)
          {
            setSpinner(false)
            return;
          }

          if(pageNumber<0)
            {
              setSpinner(false)
              return;
            }

    lodeAllPost(pageNumber,pageSize).then((data)=>{
      console.log(data);
      setSpinner(false)

      setPostContent(data);
      window.scroll(0,0)

  })
  .catch(error=>{
    
    console.log(error)
    toast.warn("Faild to lode Post")
  });

  }

  // handling delete post

  const deletePost=(post)=>{

    deletePostService(post.post_id).then((res)=>{
        toast.success("Post deleted sucessfully")

        let newContent=Postcontent.content.filter((p)=>p.post_id != post.post_id)

        setPostContent({...Postcontent,content:newContent})

      })
      .catch((error)=>{
        console.log(error)
        toast.warn("post can't deleted ")
      })
  }




  return (

    

    <div className="container-fluid">

      {spinner ? (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          position: 'fixed',
          flexDirection:'column',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          zIndex: 9999
        }}>
          <img src='./Spinner2.svg' style={{ maxWidth: '100px' }} alt='Loading...' />
          <h3>Bhai Aa raha hoon, nikal gaya Bas</h3>
        </div>
      ) :
      (
      <>
      <Row>
          <Col md={
              {
                size:12,
                offset:1
              }
          }> 
          </Col>

      </Row>
          
         

            {
              (Postcontent.content).map((post)=>{
                 return <Post deletePost={deletePost} post={post}  key={post.post_id}  />
                  
              })
            }

          <Container className='mt-3'>

       {Postcontent.content.length!=0?
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
          :''
       } 
          </Container>
    </>
  )}
    </div>
  )
}

export default NewFeed
