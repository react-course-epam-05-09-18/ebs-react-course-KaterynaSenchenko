import React, {Component} from "react";
import {Button, Grid, Row, Col} from "react-bootstrap";

class CourseListItem extends Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "",
			duration: "",
			date: "",
			description: ""
		}
	}

	render() {
		return (
			<Grid>
				<Row className="show-grid">
					<Col>
						<Row>
							<Col>
								<b>{this.state.title}</b>
							</Col>
							<Col>
								{this.state.duration}
							</Col>
							<Col>
								{this.state.date}
							</Col>
						</Row>
						<Row>
							{this.state.description}
						</Row>
					</Col>
					<Col>
						<Row>
							<Button type="submit">Edit</Button>
						</Row>
						<Row>
							<Button type="submit">Delete</Button>
						</Row>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default CourseListItem;