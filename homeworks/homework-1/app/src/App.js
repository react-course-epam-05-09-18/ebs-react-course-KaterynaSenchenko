import logo from './logo.jpg';
import './App.css';
import Login from "./components/Login";
import React, { Component } from 'react';
import {
  Route,
  HashRouter
} from "react-router-dom";
import {
  PageHeader,
  Image,
} from "react-bootstrap";


class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader className="App-header">
          <Image src={logo} className="App-logo" />{' '}Welcome
        </PageHeader>
        <HashRouter>
          <div className="content">
            <Route exact path="/" component={Login} />
          </div>
        </HashRouter>
      </div>

    );
  }
}

export default App;
