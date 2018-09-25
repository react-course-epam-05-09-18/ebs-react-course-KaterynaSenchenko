import React from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import { LoginPage } from "./features/LoginPage";
import { CourseEditPage } from "./features/CourseEditPage";
import { CourseListPage } from "./features/CourseListPage";
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="content">
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/course" component={CourseEditPage} />
            <Route exact path="/courses" component={CourseListPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export { App };
