import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ModalChildren = ({handleModal, photo}) => {

  console.log(`NAME: ${photo.id}`)
  console.log(`LOCATION: ${photo.alt}`)

  return (
    <div className='modalChildren'>
      <Row className='d-flex p-5'>
        <Col className='p-0 mx-0'>
          <img src={photo.src} alt="" width='500' height='500' />
          <Col className='text-dark bg-light p-2'>
            <h3>{photo.id} </h3>
            <h3>{photo.alt} </h3>
          </Col>
        </Col>
        <Col className='p-0 mx-0' >
          <span className="material-icons text-danger pointer" onClick={handleModal} >close</span>
        </Col>
      </Row>
    </div>
  )
}

export default ModalChildren