import React from 'react'
import Base from '../component/Base'
import { isLogin } from '../auth';
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const nav=useNavigate();


  return (
    <div>
    <Base>
      
      Home
      Home
    </Base>
    </div>
  )
}

export default Home
