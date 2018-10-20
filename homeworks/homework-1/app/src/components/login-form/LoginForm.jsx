import React from "react";
import {
	Button,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Col
} from "react-bootstrap";
import { compose } from 'recompose';
import { Header } from "../common/header/Header"
import { withLoginFields } from './withLoginFields';
import { withLoginEnhancer } from './withLoginEnhancer';

const LoginFormComponent = props => {
	const {
		formFields: { login, password },
		handleSubmit,
		handleChange
	} = props;

	return (
		<div>
			<Header
				pageTitle="Welcome"
			/>
			<Form horizontal onSubmit={handleSubmit}>
				<FormGroup controlId="email">
					<Col componentClass={ControlLabel} sm={4}>
						Email
					</Col>
					<Col sm={2}>
						<FormControl
							name="login"
							type="email"
							value={login.value}
							placeholder="Email"
							onChange={handleChange} />
					</Col>
					<Col componentClass={ControlLabel}>
						*enter your email
					</Col>
				</FormGroup>

				<FormGroup controlId="password">
					<Col componentClass={ControlLabel} sm={4}>
						Password
					</Col>
					<Col sm={2}>
						<FormControl
							name="password"
							type="password"
							value={password.value}
							placeholder="Password"
							onChange={handleChange} />
					</Col>
					<Col componentClass={ControlLabel}>
						*enter your password
					</Col>
				</FormGroup>

				<FormGroup>
					<Col smOffset={4} sm={4}>
						<Button type="submit">Sign in</Button>
					</Col>
				</FormGroup>
			</Form>
		</div>
	);
}

LoginFormComponent.ownProps = {
	onSubmit: () => { },
};

export const LoginForm = compose(
	withLoginFields,
	withLoginEnhancer
)(LoginFormComponent);