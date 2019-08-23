import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Nav } from "react-bootstrap";

import s from "./style.less";

class NavigationBarPullRight extends Component {
  static propTypes = {
    rightElement: PropTypes.element,
  };
  render() {
    const rightElement = this.props.rightElement || [];
    return (
      <Nav pullRight className={[s["nav-bar-fullheight"], s["flex-center"]]}>
        {rightElement}
      </Nav>
    );
  }
}

export default withStyles(s)(NavigationBarPullRight);
