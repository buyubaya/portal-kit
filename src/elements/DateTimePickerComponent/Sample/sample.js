import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import DateTimePickerComponent from "../index";

import s from "./sample.less";

class DatePickerSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="Date Time Picker" />
        <h1> Information </h1><br />
        <p> Date Time picker in NAB Portal. Use Bootrap material ui.</p> <br />
        <h1> Sample </h1><br />
        <h4> Disable with text</h4>
        <DateTimePickerComponent disabled placeholder="12/12/2012" /><br />
        <h4> Enable and Clickable </h4>
        <DateTimePickerComponent />
      </div>
    );
  }
}

export default withStyles(s)(DatePickerSample);
