import React from "react";
import { Header } from "../components/index"
import { LoginForm } from "../components/index";

class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<Header
					pageTitle="Welcome"
				/>
				<LoginForm />
			</div>
		);
	}
}

export { LoginPage };