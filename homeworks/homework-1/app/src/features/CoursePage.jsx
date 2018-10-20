import React from "react";
import { Header } from "../components"
import { CourseForm } from "../components";

class CoursePage extends React.Component {

	constructor(props) {
		super(props);
		this.routeParam = props.match.params.id;
	}

	render() {
		return (
			<div>
				<Header pageTitle={this.routeParam} />
				<CourseForm />
			</div>
		);
	}
}

export { CoursePage };