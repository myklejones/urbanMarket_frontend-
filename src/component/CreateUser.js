import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Form, Button} from 'react-bootstrap'


const Styles = styled.div`

`


function NewUser() {

  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')


  const formInput = evt => {

    console.log(evt.target.name)
    switch(evt.target.name){
      case 'email':
        setEmail(evt.target.value)
        break;
      case 'password':
        setPassword(evt.target.value)
        break;  
    }
    // setInput(evt.target.value)
  }






  console.log(email, password)
  console.log("create user page")
    return (
      <div className="container" >
    
      <Form >
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="mt-5">Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" value={email} onChange={formInput}  />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
    
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" value={password} onChange={formInput} />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div >
            
       
    )
}

export default NewUser;
