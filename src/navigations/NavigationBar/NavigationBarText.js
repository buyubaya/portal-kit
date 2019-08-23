import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Navbar } from "react-bootstrap";

import s from "./style.less";

class NavigationBarText extends Component {
  static propTypes = {
    textElement: PropTypes.element,
  }
  render() {
    const textElement = this.props.textElement || [];
    return (
      <Navbar.Text>
        {textElement}
      </Navbar.Text>
    );
  }
}

export default withStyles(s)(NavigationBarText);
