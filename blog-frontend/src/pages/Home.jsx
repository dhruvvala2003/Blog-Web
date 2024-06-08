import React from 'react'
import Base from '../component/Base'
import { isLogin } from '../auth';
import NewFeed from '../component/NewFeed';
import { Container } from 'reactstrap';
const Home = () => {

 

  return (
        <div style={{"background-color":"#eceff1", "height":"170vh","width":"100vw"}}>
          <Base>
            <Container>

              <NewFeed/>
            </Container>
          </Base>
        </div>
  )
}

export default Home
