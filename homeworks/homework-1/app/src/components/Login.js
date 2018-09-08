import React, { Component } from "react";
import { Button, Form, FormGroup, FormControl, ControlLabel, Col} from "react-bootstrap";

class Login extends Component {
  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={4}>
            Email
          </Col>
          <Col sm={2}>
            <FormControl type="email" placeholder="Email" />
          </Col>
          <Col componentClass={ControlLabel} >
            *enter your email
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={4}>
            Password
          </Col>
          <Col sm={2}>
            <FormControl type="password" placeholder="Password" />
          </Col>
          <Col componentClass={ControlLabel}>
            *enter your password
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={4} sm={4}>
            <Button type="submit">Sign in</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;