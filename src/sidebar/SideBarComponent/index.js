import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

const classNames = require("classnames");

class SideBarComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
  }
  render() {
    const classname = classNames(s["side-bar"], this.props.className);
    return (
      <div className={classname}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(SideBarComponent);
