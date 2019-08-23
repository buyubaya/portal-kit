import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import constant from "../../constant";

const classNames = require("classnames");

class SimpleTextBox extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    editable: PropTypes.bool,
    required: PropTypes.bool,
    size: PropTypes.oneOf([
      constant.COMPONENT_SIZE.LARGE,
      constant.COMPONENT_SIZE.SMALL,
    ]),
    name: PropTypes.string,
    type: PropTypes.string,
    ref: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    defaultValue: PropTypes.string,
    style: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onKeyDown: PropTypes.func,
    onKeyUp: PropTypes.func,
    id: PropTypes.string,
    min: PropTypes.string,
    max: PropTypes.string,
  };
  render() {
    const textboxClasses = {};
    if (this.props.size === constant.COMPONENT_SIZE.LARGE) {
      textboxClasses["input-lg"] = true;
    }
    if (this.props.size === constant.COMPONENT_SIZE.SMALL) {
      textboxClasses["input-sm"] = true;
    }
    const classname = classNames(
      textboxClasses,
      "form-control",
      this.props.className,
    );

    return (
      <input
        style={this.props.style}
        ref={this.props.ref}
        required={this.props.required}
        name={this.props.name}
        onInput={this.props.onInput}
        type={this.props.type}
        className={classname}
        placeholder={this.props.placeholder}
        disabled={!this.props.editable}
        value={this.props.value}
        defaultValue={this.props.defaultValue}
        onBlur={this.props.onBlur}
        onChange={this.props.onChange}
        onKeyUp={this.props.onKeyUp}
        onKeyDown={this.props.onKeyDown}
        min={this.props.min}
        max={this.props.max}
        id={this.props.id}
      />
    );
  }
}

SimpleTextBox.defaultProps = {
  type: "text",
  editable: true,
  className: "",
  value: "",
  onChange: value => {
    console.log(value);
  },
  onInput: () => {},
  onBlur: () => {},
};

export default withStyles(s)(SimpleTextBox);
