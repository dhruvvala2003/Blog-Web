import React from 'react'
import Base from '../component/Base'
import { isLogin } from '../auth';
import NewFeed from '../component/NewFeed';
import { Col, Container, Row } from 'reactstrap';
import CategorySideManue from '../component/CategorySideManue';
const Home = () => {

 

  return (
        <div style={{"background-color":"#eceff1", "height":"170vh","width":"100vw"}}>
          <Base>
            <Container>

              <Row >
                <Col md={2} className='border mt-3 pt-3'>
                    <CategorySideManue/>
                </Col>

                <Col md={10}>
                    <NewFeed/>
                </Col>
              </Row>
            </Container>
          </Base>
        </div>
  )
}

export default Home
