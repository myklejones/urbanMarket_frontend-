import React from 'react'

function login() {
    return (
        <div>
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
            
        </div>
    )
}

export default login;

