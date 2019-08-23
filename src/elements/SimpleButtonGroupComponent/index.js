/* eslint no-underscore-dangle:"off" */

import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import LoadingComponent from "../LoadingComponent";
import s from "./style.less";

const classNames = require("classnames");

class SimpleButtonGroupComponent extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
    className: PropTypes.string,
    align: PropTypes.string,
  };
  constructor(props) {
    super(props);
  }
  render() {
    const classname = classNames(
      this.props.className,
      s["simple-button-group"],
      s["align-" + this.props.align],
    );
    return (
      <div className={classname}>
        {this.props.children}
      </div>
    );
  }
}

SimpleButtonGroupComponent.defaultProps = {
  align: "left",
};

export default withStyles(s)(SimpleButtonGroupComponent);
