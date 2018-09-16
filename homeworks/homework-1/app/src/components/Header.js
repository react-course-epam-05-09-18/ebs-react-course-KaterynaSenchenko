import React, {Component} from "react";
import {Image, PageHeader} from "react-bootstrap";
import logo from "../logo.jpg";

class Header extends Component {

  render() {
    return (
      <PageHeader className="App-header">
        <Image src={logo} className="App-logo"/>{' '}{this.props.greeting}
      </PageHeader>
    );
  }
}

export default Header;
