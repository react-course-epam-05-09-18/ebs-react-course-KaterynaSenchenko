import React from "react";
import {
  Image,
  PageHeader
} from "react-bootstrap";
import PropTypes from 'prop-types';
import logo from "../../logo.jpg";

class Header extends React.Component {

  render() {
    return (
      <PageHeader className="App-header">
        <Image src={logo} className="App-logo"/>{' '}{this.props.pageTitle}
      </PageHeader>
    );
  }
}

Header.propTypes = {
	pageTitle: PropTypes.string
};

export {Header};
