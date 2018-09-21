import React from "react";
import {
	Button,
	Col,
	ControlLabel,
	Form,
	FormControl,
	FormGroup
} from "react-bootstrap";
import {Header} from "./common/Header"

class Course extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Edit course"
    }
  }

  render() {
    return (
      <div>
        <Header pageTitle={this.state.title}/>
        <Form horizontal>
          <FormGroup controlId="title">
            <Col componentClass={ControlLabel} sm={4}>
              Title
            </Col>
            <Col sm={2}>
              <FormControl type="text" placeholder="Title"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="Description">
            <Col componentClass={ControlLabel} sm={4}>
              Description
            </Col>
            <Col sm={2}>
              <FormControl componentClass="textarea" placeholder="Text area"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="date">
            <Col componentClass={ControlLabel} sm={4}>
              Date
            </Col>
            <Col sm={2}>
              <FormControl type="text" placeholder="Date"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="duration">
            <Col componentClass={ControlLabel} sm={4}>
              Duration
            </Col>
            <Col sm={1}>
              <FormControl type="number" min="0" placeholder="Min"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={4}>
              <Button type="submit">Save</Button>
              {' '}<Button type="submit">Cancel</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export {Course};