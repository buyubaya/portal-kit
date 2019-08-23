import React, { Component } from "react";
import PropTypes from "prop-types"
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";

import constant from "../../constant";

const classNames = require("classnames");

class AlertComponent extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      constant.COMPONENT_TYPE.DANGER,
      constant.COMPONENT_TYPE.INFO,
      constant.COMPONENT_TYPE.SUCCESS,
      constant.COMPONENT_TYPE.WARNING,
    ]).isRequired,
    content: PropTypes.string.isRequired,
    className: PropTypes.string,
    dismiss: PropTypes.bool,
    onCloseAlert: PropTypes.func,
  }
  static defaultProps = {
    dismiss: true,
    type: constant.COMPONENT_TYPE.INFO,
  }
  constructor(props) {
    super(props);

    this.state = {
      alertVisible: true,
    };
  }
  handleAlertDismiss = () => {
    this.setState({ alertVisible: false });
    const onCloseAlert = this.props.onCloseAlert;
    if (onCloseAlert && typeof onCloseAlert === "function") {
      onCloseAlert();
    }
  }

  handleAlertShow = () => {
    this.setState({ alertVisible: true });
  }
  render() {
    const classes = {};
    classes[`alert-${this.props.type}`] = true;
    if (this.props.dismiss) {
      classes["alert-dismissible"] = true;
    }
    const classname = classNames(
      "alert alert-component",
      this.props.className,
      classes,
    );

    const content = this.props.content || "";
    if (content === "") {
      return <div />;
    }
    const { alertVisible } = this.state;
    if (!alertVisible) {
      return <div />;
    }

    return (
      <div className={classname} role="alert">
        {this.props.dismiss
          ? <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="close"
            onClick={this.handleAlertDismiss}
          >
              ×
            </button>
          : null}
        <span dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </div>
    );
  }
}

export default withStyles(s)(AlertComponent);
