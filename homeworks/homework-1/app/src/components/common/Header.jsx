import React from "react";
import {
  Image,
  PageHeader
} from "react-bootstrap";
import PropTypes from 'prop-types';
import logo from "../../logo.jpg";
import './Header.css';

class Header extends React.Component {

  render() {
    return (
      <PageHeader className="header">
        <Image src={logo} className="header__logo"/>{this.props.pageTitle}
      </PageHeader>
    );
  }
}

Header.propTypes = {
	pageTitle: PropTypes.string
};

export {Header};
