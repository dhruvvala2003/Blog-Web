import React from 'react'
import MyNavbar from './MyNavbar'
import Footer from './Footer'



const Base = ({title="Welcome To Website" , children}) => {
  return (
    <>
    {/* header portion : navbar  */}

  <MyNavbar/>

{/* navbar portion complited ... */}


    {children}
    
      </>
  )
}

export default Base
