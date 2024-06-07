import React from 'react'
import Base from './Base'

const MyInfo = () => {
  return (
    <div>
       <Base>

       
      MyInfo:{localStorage.getItem("email")}

    </Base>
    </div>
  )
}

export default MyInfo
