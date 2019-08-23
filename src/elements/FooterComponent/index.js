/* eslint react/no-string-refs:"off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";

const classNames = require("classnames");

class FooterComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
  };
  // constructor(props){
  //   super(props);
  // }

  render() {
    let { className } = this.props
    className = classNames(className, s["footer"])
    return (
      <div className={className}>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(FooterComponent);
