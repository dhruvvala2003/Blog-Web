import React, { useEffect, useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllCategory } from '../service/CategoryService'
import { Link } from 'react-router-dom'

const CategorySideManue = () => {

    const [category,setCategory]=useState([])

    useEffect(()=>{

      loadAllCategory().then((res)=>{
          setCategory([...res])
          console.log(res);
      })
      .catch((error)=>{
          console.log(error)

      })

    },[])
  return (
    <div>
      
      
      <ListGroup >
      {category.length!=0?
      <ListGroupItem tag={Link} to="/" action={true} className='border-0 mt-2' >
          All Blogs
        </ListGroupItem>
       : ''
      }
      {
        category?.map((cat,index)=>
        { 
        return(
          <ListGroupItem key={index} tag={Link} to={`/category/${cat.category_Id}`} action={true} className='border-0 mt-2' >
          {cat.category_Title}
        </ListGroupItem>
        )
        })
      }

      </ListGroup>

    </div>
  )
}

export default CategorySideManue
