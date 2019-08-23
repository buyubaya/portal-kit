import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import datetime_css from "./datetime.keepOriginalLess"

import constant from "../../constant";
// import Datetime from "./DateTime";

import Datetime from "react-datetime";

const classNames = require("classnames");

// var Datetime = require("./DateTime");

class DateTimeComponent extends Component {
  static propTypes = {
    dateFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    timeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    input: PropTypes.bool,
    open: PropTypes.bool,
    locale: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    viewMode: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    inputProps: PropTypes.object,
    isValidDate: PropTypes.func,
    strictParsing: PropTypes.bool,
    closeOnSelect: PropTypes.bool,
    closeOnTab: PropTypes.bool,
    timeConstraints: PropTypes.object,
    disableOnClickOutside: PropTypes.bool
  };
  static defaultProps = {
    onChange: e => {}
  }

  onChange = (val) => {
    console.log("datetime: " + val);
    this.props.onChange(val);
  }
  render() {
    let { className, onChange, inputProps, disabled, ...other } = this.props;

    if (typeof inputProps === "undefined") {
      inputProps = {};
    }
    if (disabled) {
      inputProps.disabled = true;
    }

    var classname = classNames({}, className);
    return (
      <Datetime
        className={classname}
        inputProps={inputProps}
        {...other}
        onChange={this.onChange}
      />
    );
  }
};

export default withStyles(s, datetime_css)(DateTimeComponent);
