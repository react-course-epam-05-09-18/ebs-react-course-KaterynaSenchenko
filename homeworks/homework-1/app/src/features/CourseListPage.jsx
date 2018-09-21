import React from 'react';
import {
	ListGroup,
	Button,
	Form,
	FormControl,
	FormGroup,
} from 'react-bootstrap';
import {CourseListItem} from "../components/CourseListItem";
import {Header} from "../components/common/Header";
import  './CourseListPage.css';

class CourseListPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      courses: [
        {
          id: 1,
          title: 'CourseForm 1',
          duration: '180',
          date: '12.12.12',
          description: 'Description1'
        },
        {
          id: 2,
          title: 'CourseForm 2',
          duration: '20',
          date: '12.12.12',
          description: 'Description2'
        },
        {
          id: 3,
          title: 'CourseForm 3',
          duration: '100',
          date: '12.12.12',
          description: 'Description3'
        }
      ],
      title: "Courses"
    };
  }

  render() {
    const {
      courses
    } = this.state;

    return (
      <div>
        <Header
					pageTitle={this.state.title}
				/>

        <Form inline>
          <FormGroup controlId="searchParameter">
            <FormControl type="text" placeholder="enter name or date"/>
          </FormGroup>
          <Button type="submit">Search</Button>
          <Button type="submit">Add course</Button>
        </Form>

        <ListGroup componentClass="ul">
          {this.renderCourses(courses)}
        </ListGroup>
      </div>
    );
  }

  renderCourses(courses) {
    return courses.map(course => {
      return <CourseListItem
        title={course.title}
        description={course.description}
        duration={course.duration}
        date={course.date}
				key={course.id + '-key'}
			/>;
    });
  }
}

export {CourseListPage};