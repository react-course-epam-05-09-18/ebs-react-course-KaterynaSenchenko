import React from "react";
import {
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import PropTypes from "prop-types";

class CourseListItem extends React.Component {

  static get propTypes() {
    return {
      title: PropTypes.string,
      duration: PropTypes.number,
      date: PropTypes.instanceOf(Date),
      description: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      title: "New Course",
      duration: 60,
      date: new Date(),
      description: "Amazing, jaw-dropping, fascinating and simply awesome course :)"
    }
  }

  render() {
    return (
      <Grid>
        <Col sm={8}>
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

export { CourseListItem };