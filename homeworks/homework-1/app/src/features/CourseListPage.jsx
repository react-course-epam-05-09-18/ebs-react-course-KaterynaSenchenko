import React from 'react';
import {
  ListGroup,
  Button,
  Form,
  FormControl,
  FormGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CourseListItem } from "../components";
import { Header } from "../components";
import './CourseListPage.css';

class CourseListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          title: 'CourseForm 1',
          duration: 180,
          date: '12.12.12',
          description: 'Description1'
        },
        {
          id: 2,
          title: 'CourseForm 2',
          duration: 20,
          date: '12.12.12',
          description: 'Description2'
        },
        {
          id: 3,
          title: 'CourseForm 3',
          duration: 100,
          date: '12.12.12',
          description: 'Description3'
        }
      ]
    };
  }

  render() {

    const corsesList = this.state.courses.map((course, index) => this.renderCourse(course, index));

    return (
      <div>
        <Header
          pageTitle="Courses"
        />

        <Form inline>
          <FormGroup controlId="searchParameter">
            <FormControl
              type="text"
              placeholder="enter name or date" />
          </FormGroup>
          <Button type="submit" bsStyle="info">Search</Button>
          <Button type="submit" bsStyle="info">
            <Link to={'/courses/new'}>Add course</Link>
          </Button>
        </Form>

        <ListGroup componentClass="ul">
          {corsesList}
        </ListGroup>
      </div>
    );
  }

  renderCourse(course, index) {
    return <CourseListItem
      title={course.title}
      description={course.description}
      duration={course.duration}
      date={course.date}
      id={course.id}
      key={index + '-key'}
    />;
  }
}

export { CourseListPage };