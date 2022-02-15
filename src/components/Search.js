import React from 'react'
import { Container, Form } from 'react-bootstrap'

const Search = ({onInputChange, inputValue, loading}) => {
  

  return (
    <Container className='formContainer'>
      {
        loading? (<h1 className='pb-3'>Search Results for <span className='text-muted'>"Fun"</span></h1>)
        :
        (
          <Form className=''>
            <Form.Control type='search' 
              value = {inputValue}
              placeholder="&#x1F50E; search for photo" 
              onChange={onInputChange}
            />
          </Form>
        )
      }
    </Container>
  )
}

export default Search