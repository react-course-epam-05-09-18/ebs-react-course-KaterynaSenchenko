import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";
import { LoginPage } from "./features/LoginPage";
import { CoursePage } from "./features/CoursePage";
import { CourseListPage } from "./features/CourseListPage";
import { PrivateRoute } from './features/privateRoute/PrivateRoute';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="content">
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute path="/courses/new" component={CoursePage} />
            <PrivateRoute path="/courses/:id" component={CoursePage} />
            <PrivateRoute path="/courses" component={CourseListPage} />
            <Redirect to="/courses" />
          </Switch>   
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export { App };
