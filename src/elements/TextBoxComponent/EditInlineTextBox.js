import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import constant from "../../constant";
import s from "./style.less";

const classNames = require("classnames");

class EditInlineTextBox extends Component {
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
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    defaultValue: PropTypes.string,
    ref: PropTypes.string,
    style: PropTypes.string,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    onBlur: PropTypes.func,
    onSaveText: PropTypes.func,
    onCancelText: PropTypes.func,
  };
  constructor(props){
    super(props);
    this.state = {
      editing: false,
    };
  }
  onEditTextClick() {
    this.setState({
      editing: true,
    });
  }
  onSaveText() {
    this.setState({
      editing: false,
    });
    this.props.onSaveText();
  }
  onCancelText() {
    this.setState({
      editing: false,
    });
    this.props.onCancelText();
  }
  render() {
    const textboxClasses = {};
    if (this.props.size === "large") {
      textboxClasses["input-lg"] = true;
    }
    if (this.props.size === "small") {
      textboxClasses["input-sm"] = true;
    }
    const classname = classNames(
      textboxClasses,
      "form-control",
      this.props.className,
    );

    const { editing } = this.state;
    // const value = this.props.value || this.props.placeholder;

    if (!editing) {
      return (
        <div
          className={s["form-input-inline-view-mode"]}
          onClick={this.onEditTextClick}
        >
          {this.props.value}
        </div>
      );
    }

    return (
      <div>
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
          value={this.props.value || ""}
          onChange={this.props.onChange}
          defaultValue={this.props.defaultValue}
          onBlur={this.props.onBlur}
        />
        <div className={s["simple-button-group"]}>
          <button
            onClick={this.onSaveText}
            className="btn btn-default btn-success"
          >
             Save
          </button>
          <button onClick={this.onCancelText} className="btn btn-default">
             Cancel
          </button>
        </div>
      </div>
    );
  }
}

EditInlineTextBox.defaultProps = {
  type: "text",
  editable: true,
  className: "",
  onChange: () => {},
  onInput: () => {},
  onBlur: () => {},
  placeholder: "Placeholder text...",
};

export default withStyles(s)(EditInlineTextBox);
