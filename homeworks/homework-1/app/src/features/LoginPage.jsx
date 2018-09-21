import React from "react";
import {Header} from "../components/common/Header"
import {LoginForm} from "../components/LoginForm";

class LoginPage extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			title: "Welcome"
		}
	}

	render() {
		return (
			<div>
				<Header
					pageTitle={this.state.title}
				/>
				<LoginForm/>
			</div>
		);
	}
}

export {LoginPage};