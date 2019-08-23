import React, { Component } from "react";
import PropTypes from "prop-types"
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import constant from "../../constant";

const classNames = require("classnames");

// var DateTimeField = require('react-bootstrap-datetimepicker');
// import 'react-bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css';
const DatePicker = require("react-bootstrap-date-picker");

class DateTimePickerComponent extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string,
    dateFormat: PropTypes.string,
    placeholder: PropTypes.string,
    dayLabels: PropTypes.array,
    monthLabels: PropTypes.array,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    cellPadding: PropTypes.number,
    clearButtonElement: PropTypes.element,
    previousButtonElement: PropTypes.element,
    nextButtonElement: PropTypes.element,
    calendarPlacement: PropTypes.object,
  };
  onChange(val) {
    console.log(`datetime: ${val}`);
  }
  render() {
    const classname = classNames({}, this.props.className);
    // <div style={{position:'relative'}} >
    return (
      <div className={classname}>
        <DatePicker
          onChange={this.props.onChange}
          value={this.props.value}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          dateFormat={this.props.dateFormat}
          clearButtonElement={this.props.clearButtonElement}
          previousButtonElement={this.props.previousButtonElement}
          nextButtonElement={this.props.nextButtonElement}
          cellPadding={this.props.cellPadding}
          dayLabels={this.props.dayLabels}
          monthLabels={this.props.monthLabels}
          calendarPlacement={this.props.calendarPlacement}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}

DateTimePickerComponent.defaultProps = {
  inputFormat: constant.DEFAULT_DATE_INPUT_FORMAT,
  dateFormat: constant.DEFAULT_DATE_FORMAT,
  placeholder: "Select date",
  onChange: e => {
    console.log(e);
  },
};

export default withStyles(s)(DateTimePickerComponent);
