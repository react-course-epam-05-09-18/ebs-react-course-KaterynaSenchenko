import './App.css';
import Login from "./components/Login";
import Course from "./components/Course";
import CourseList from "./components/CourseList";
import React, {Component} from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";


class App extends Component {

  render() {
    return (
      <div className="App">
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
