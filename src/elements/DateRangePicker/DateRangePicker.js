// This compoent use react-bootstrap-daterangepicker
// https://github.com/skratchdot/react-bootstrap-daterangepicker

import React, { Component } from "react";
import PropTypes from "prop-types";
import DateRange from "react-bootstrap-daterangepicker";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import moment from "moment";

import CONSTANTS from "../../constant";

import s from "bootstrap-daterangepicker/daterangepicker.css";
import ss from "./style.keepOriginalLess";

// import SelectComponent from "../SelectComponent/";

class DateRangePicker extends Component {
  static propTypes = {
    onApply: PropTypes.func,
    onClear: PropTypes.func,
    containerStyles: PropTypes.object,
    dateType: PropTypes.string, // date type : custom, today, yesterday, last7days
    dateRange: PropTypes.object, // An object { from: moment object, to: moment object }
  };

  static defaultProps = {
    containerStyles: {},
    onApply: () => {},
    onClear: () => {},
    dateType: null,
    dateRange: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    const { dateType, dateRange } = nextProps;

    let value = "";

    if (dateType === CONSTANTS.DATE_RANGE_OPTIONS.TODAY) {
      value = "Today";
    } else if (dateType === CONSTANTS.DATE_RANGE_OPTIONS.YESTERDAY) {
      value = "Yesterday";
    } else if (dateType === CONSTANTS.DATE_RANGE_OPTIONS.LAST7DAYS) {
      value = "Last 7 days";
    } else if (dateType === CONSTANTS.DATE_RANGE_OPTIONS.LAST30DAYS) {
      value = "Last 30 days";
    } else if (dateType === CONSTANTS.DATE_RANGE_OPTIONS.CUSTOM) {
      value = `${dateRange.from.format("DD/MM/YYYY")} - ${dateRange.to.format("DD/MM/YYYY")}`;
    }

    this.setState({ value });
  }

  onApply = (event, picker) => {
    const { startDate, endDate } = picker;
    const diffStart = moment().diff(startDate, "days");
    const diffEnd = moment().diff(endDate, "days");
    const diff = endDate.diff(startDate, "days");
    const dateRange = {};

    if (diffStart === 0 && diffEnd === 0 && diff === 0) {
      dateRange.date_type = CONSTANTS.DATE_RANGE_OPTIONS.TODAY;
    } else if (diffStart === 1 && diffEnd === 0 && diff === 1) {
      dateRange.date_type = CONSTANTS.DATE_RANGE_OPTIONS.YESTERDAY;
    } else if (diffStart === 6 && diffEnd === 0 && diff === 6) {
      dateRange.date_type = CONSTANTS.DATE_RANGE_OPTIONS.LAST7DAYS;
    } else if (diffStart === 29 && diffEnd === 0 && diff === 29) {
      dateRange.date_type = CONSTANTS.DATE_RANGE_OPTIONS.LAST30DAYS;
    } else {
      dateRange.date_type = CONSTANTS.DATE_RANGE_OPTIONS.CUSTOM;
    }

    dateRange.range = {
      to: endDate,
      from: startDate,
    };

    // export moment object
    this.props.onApply(dateRange.range, dateRange.date_type);
  };

  onClear = () => {
    this.setState({
      value: "",
    });

    this.props.onClear();
  };

  render() {
    const { onApply, containerStyles, ...other } = this.props;
    const { value } = this.state;

    const settings = {
      ranges: {
        Today: [moment(), moment()],
        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
      },
      locale: {
        format: "DD/MM/YYYY",
      },
    };

    return (
      <DateRange containerStyles={containerStyles} onApply={this.onApply} onCancel={this.onClear} {...settings} {...other}>
        <div className="Select-control">
          <span className="Select-multi-value-wrapper">
            <div className="Select-input">
              <input
                role="combobox"
                aria-expanded="false"
                aria-owns=""
                aria-haspopup="false"
                value={value}
                placeholder="Select..."
              />
            </div>
          </span>

          {/* CLEAR BUTTON */}
          {/* <span
            onClick={this.onClear}
            className="Select-clear-zone"
            title="Clear value"
            aria-label="Clear value"
          >
            <span className="Select-clear">×</span>
          </span> */}
          <span className="Select-arrow-zone">
            <span className="Select-arrow" />
          </span>
        </div>
      </DateRange>
    );
  }
}

export default withStyles(s, ss)(DateRangePicker);
