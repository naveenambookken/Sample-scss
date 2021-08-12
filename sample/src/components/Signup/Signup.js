import React from 'react'
import '../../scss/Signup.css'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Signup() {
    return (
        <div className="MainBody">
          <div className="signupBody" >
           <div className="signupTitle">
           <h1>Register</h1>
           </div>
           <Form>
            <FormGroup>
              <Label className="my-2" for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="name" />
            </FormGroup>
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
                I agree to <a href="#">terms</a> and <a href="#">privacy policy</a>.
              </Label>
            </FormGroup>
            <Button color="primary" size="lg" block>SignUp</Button>
            </Form>
          </div>
        </div>
    )
}

export default Signup
