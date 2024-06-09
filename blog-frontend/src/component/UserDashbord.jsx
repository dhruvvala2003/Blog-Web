import React from 'react'
import AddPost from './AddPost'
import Base from './Base'
import { Container } from 'reactstrap'

const UserDashbord = () => {
  return (
    <div>
      <Base>

        <Container>
            <AddPost/>
        </Container>
      </Base>
    </div>
  )
}

export default UserDashbord
