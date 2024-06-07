import React from 'react'
import { isLogin } from '../auth'
import { Navigate, useNavigate } from 'react-router-dom'

const PrivateRouter = () => {
    const nav=useNavigate();


       if(isLogin())
        {
            return <Navigate to={"/"} />
        }
        else{
            
            return <Navigate to={"/login"} />
        }


  
}

export default PrivateRouter
