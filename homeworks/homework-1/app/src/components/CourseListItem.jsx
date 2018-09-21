import React from "react";
import {
	Button,
	Grid,
	Row,
	Col
} from "react-bootstrap";
import PropTypes from "prop-types";

class CourseListItem extends React.Component {

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

CourseListItem.propTypes = {
	title: PropTypes.string,
	duration: PropTypes.number,
	date: PropTypes.instanceOf(Date),
	description: PropTypes.string
};

export {CourseListItem};