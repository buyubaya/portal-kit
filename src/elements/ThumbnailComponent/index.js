import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";

const classNames = require("classnames");

class ThumbnailComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.element,
  }
  render() {
    const { className, ...other } = this.props;
    const classname = classNames(className, s["thumbnail-item"]);
    return (
      <div className={classname} {...other} >
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(s)(ThumbnailComponent);
