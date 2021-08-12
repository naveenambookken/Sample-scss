import React from 'react'
import '../../scss/Login.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

function Login() {
    return (
        <div className="MainBody">
          <div className="loginBody" >
           <div className="loginTitle">
           <h1>LOGIN</h1>
           </div>
           <Form>
            <FormGroup>
              <Label className="my-2" for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label className="my-2" for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="password" />
            </FormGroup>
            <FormGroup className="my-3" check>
              <Label check>
                <Input type="checkbox" />
                Remember Me
              </Label>
            </FormGroup>
            <Button color="primary" size="lg" block>LOGIN</Button>
            </Form>
          </div>
        </div>
    )
}

export default Login
