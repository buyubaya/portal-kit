import React, { Component } from "react";
import Helmet from "react-helmet";

import DateRangePicker from "../DateRangePicker";

class DateRangePickerSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="Date Range Picker Sample" />
        <h1>Date Range Picker</h1>
        <hr />
        <p>This component use react-bootstrap-daterangepicker</p>
        <p>Check document here:</p>
        <a href="https://github.com/skratchdot/react-bootstrap-daterangepicker">
          https://github.com/skratchdot/react-bootstrap-daterangepicker
        </a>
        <br />
        <br />
        <p>
          You can listen to the following 7 events: onShow, onHide, onApply, onCancel, onEvent,
          onShowCalendar, onHideCalendar
        </p>
        <p>
          All 7 of the events above should take a handler that is passed 2 arguments: event and
          picker
        </p>
        <hr />
        <DateRangePicker />
      </div>
    );
  }
}

export default DateRangePickerSample;
