import React from "react";
import {Header} from "../components/common/Header"
import {CourseForm} from "../components/CourseForm";

class CourseEditPage extends React.Component {

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
				<CourseForm/>
			</div>
		);
	}
}

export {CourseEditPage};