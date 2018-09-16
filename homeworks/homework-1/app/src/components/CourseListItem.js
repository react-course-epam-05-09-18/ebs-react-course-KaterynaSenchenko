import React, {Component} from "react";
import {Button, Grid, Row, Col} from "react-bootstrap";

class CourseListItem extends Component {

  render() {
    return (
      <Grid>
          <Col sm={10}>
            <Row>
              <Col sm={4}>
                <b>{this.props.title}</b>
              </Col>
              <Col sm={4}>
                {this.props.duration}
              </Col>
              <Col sm={4}>
                {this.props.date}
              </Col>
            </Row>
            <Row>
              {this.props.description}
            </Row>
          </Col>
          <Col>
              <Button type="submit">Edit</Button>
              <Button type="submit">Delete</Button>
          </Col>
      </Grid>
    );
  }
}

export default CourseListItem;