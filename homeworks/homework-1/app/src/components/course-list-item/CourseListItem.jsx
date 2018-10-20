import React from "react";
import {
  Button,
  Grid,
  Row,
  Col
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";

class CourseListItem extends React.Component {

  static get propTypes() {
    return {
      id: PropTypes.number,
      title: PropTypes.string,
      duration: PropTypes.number,
      date: PropTypes.string,
      description: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      id: 123456687989,
      title: "New Course",
      duration: 60,
      date: "12.12.12",
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
          <Button type="submit" bsStyle="success">
            <Link to={`/courses/${this.props.id}`}>Edit</Link>
          </Button>
          <Button type="submit" bsStyle="danger">Delete</Button>
        </Col>
      </Grid>
    );
  }
}

export { CourseListItem };