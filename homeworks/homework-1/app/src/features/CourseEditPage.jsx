import React from "react";
import { Header } from "../components/index"
import { CourseForm } from "../components/index";

class CourseEditPage extends React.Component {

	render() {
		return (
			<div>
				<Header pageTitle="Edit course" />
				<CourseForm />
			</div>
		);
	}
}

export { CourseEditPage };