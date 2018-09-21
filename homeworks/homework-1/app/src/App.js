import React from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import {Login} from "./components/Login";
import {Course} from "./components/Course";
import {CourseList} from "./components/CourseList";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Route exact path="/" component={Login}/>
            <Route exact path="/course" component={Course}/>
            <Route exact path="/courses" component={CourseList}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export {App};
