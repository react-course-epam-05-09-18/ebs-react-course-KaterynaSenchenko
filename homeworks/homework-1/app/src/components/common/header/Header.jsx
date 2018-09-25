import React from "react";
import {
  Image,
  PageHeader
} from "react-bootstrap";
import PropTypes from 'prop-types';
import logo from "./logo.jpg";
import './Header.css';

class Header extends React.Component {

  static get propTypes() {
    return {
      pageTitle: PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      pageTitle: "Hello beautiful ;)"
    }
  }

  render() {
    return (
      <PageHeader className="header">
        <Image src={logo} className="header__logo" />{this.props.pageTitle}
      </PageHeader>
    );
  }
}

export { Header };
