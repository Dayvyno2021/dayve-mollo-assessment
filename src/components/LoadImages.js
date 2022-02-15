import React from 'react'
import {Col, Container, Row } from 'react-bootstrap'
import Unsplash from './Unsplash'

const LoadImages = ({images, handleModal, loading}) => {

  return (
    <Container className='imageContainer'>
      {loading && <Unsplash/> }
      <Row className='d-flex justify-content-center flex-wrap px-5'>
        {
          images && images.map((image, i)=>(
            <Col xs={6} md={4} key={image && image.id} 
              className='d-flex flex-column'
              style={{ height: `${i%2===0? '350px':'450px'}`}}
              >
              <img className='rounded pointer images' 
                src={image && image.urls && image.urls.regular} 
              
                alt={image.user.location}
                id={image.user.username}
                onClick={handleModal}
              />
              <div className='author'>
                <h6 className=''>{image && image.user && image.user.username} </h6>
                <h6 className=''>{image && image.user && image.user.location}</h6>
              </div>
            </Col>
          ))
        }
      </Row>
    </Container>
  )
}

export default LoadImages