import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch,
  Redirect
} from "react-router-dom";
import { Login } from "./features/Login";
import { CoursePage } from "./features/CoursePage";
import { CourseListPage } from "./features/CourseListPage";
import { PrivateRoute } from './features/privateRoute/PrivateRoute';
import history from './store/util';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter history={history}>
          <div className="content">
          <Switch>
            <Route exact path="/login" component={Login} />
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
