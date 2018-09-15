import logo from './logo.jpg';
import './App.css';
import Login from "./components/Login";
import Course from "./components/Course";
import CourseList from "./components/CourseList";
import React, {Component} from 'react';
import {
	Route,
	HashRouter
} from "react-router-dom";
import {
	PageHeader,
	Image,
} from "react-bootstrap";


class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			greeting : "Welcome"
		}
	}

	render() {
		return (
			<div className="App">
				<PageHeader className="App-header">
					<Image src={logo} className="App-logo"/>{' '}{this.state.greeting}
				</PageHeader>
				<HashRouter>
					<div className="content">
						<Route exact path="/" component={Login}/>
						<Route exact path="/course" component={Course}/>
						<Route exact path="/courses" component={CourseList}/>
					</div>
				</HashRouter>
			</div>
		);
	}
}

export default App;
