import React from 'react'
import MyNavbar from './MyNavbar'



const Base = ({title="Welcome To Website" , children}) => {
  return (
    <>
    {/* header portion : navbar  */}

  <MyNavbar/>

{/* navbar portion complited ... */}


    {children}
    
      <h1>this is footer</h1>
      </>
  )
}

export default Base
