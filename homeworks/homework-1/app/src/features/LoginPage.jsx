import React from "react";
import { Header } from "../components"
import { LoginFormWithRouter } from "../components";

class LoginPage extends React.Component {

	render() {
		return (
			<div>
				<Header
					pageTitle="Welcome"
				/>
				<LoginFormWithRouter />
			</div>
		);
	}
}

export { LoginPage };