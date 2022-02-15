import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';


const Unsplash = () => {
  return (
    <Container className='imageContainer'>
      <Row>
        <Col className='d-flex flex-column align-items-end'>
          <img className='mb-5' 
              src="https://via.placeholder.com/250x300?text=Visit+Blogging.com+Now" 
              alt="" width='250' height='200'/>
            <img className='mb-5' 
              src="https://via.placeholder.com/250x400?text=Visit+Blogging.com+Now" alt=""
              width='250' height='300'  
            />
            <img className='mb-5' 
              src="https://via.placeholder.com/250x350?text=Visit+Blogging.com+Now" alt="" 
              width='250' height='250'
          />
        </Col>
        <Col className='d-flex flex-column align-items-center'>
          <img className='mb-5' 
              src="https://via.placeholder.com/250x400?text=Visit+Blogging.com+Now" alt=""
              width='250' height='300'  
            />
            <img className='mb-5' 
              src="https://via.placeholder.com/250x300?text=Visit+Blogging.com+Now" 
              alt="" width='250' height='200'/>
            <img className='mb-5' 
              src="https://via.placeholder.com/250x350?text=Visit+Blogging.com+Now" alt="" 
              width='250' height='250'
          />
        </Col>
        <Col className='d-flex flex-column align-items-start'>
          <img className='mb-5' 
              src="https://via.placeholder.com/250x350?text=Visit+Blogging.com+Now" alt="" 
              width='250' height='250'
            />
            <img className='mb-5' 
              src="https://via.placeholder.com/250x300?text=Visit+Blogging.com+Now" 
              alt="" width='250' height='200'/>
            <img className='mb-5' 
              src="https://via.placeholder.com/250x400?text=Visit+Blogging.com+Now" alt=""
              width='250' height='300'  
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Unsplash