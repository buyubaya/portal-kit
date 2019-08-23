import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Navbar } from "react-bootstrap";

import s from "./style.less";

class NavigationBarHeader extends Component {
  static propTypes = {
    header: PropTypes.element,
  };
  render() {
    const header = this.props.header || <a href="/">NAB</a>;
    return (
      <Navbar.Header>
        <Navbar.Brand>
          {header}
        </Navbar.Brand>
      </Navbar.Header>
    );
  }
}

export default withStyles(s)(NavigationBarHeader);
