import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

const classNames = require("classnames");

// ------------------------ Simple  Textarea Element ------------------------
class SimpleTextArea extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string,
    field_name: PropTypes.string,
    editable: PropTypes.bool,
    collapse: PropTypes.bool,
    onInput: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
  };
  constructor(props){
    super(props);
    this.state = {
      collapse: props.collapse || false,
    };
  }
  onCollapseButtonClick() {
    this.setState({
      collapse: false,
    });
  }
  render() {
    const classname = classNames(
      "form-control",
      s["simple-textarea"],
      this.props.className,
    );

    const { collapse } = this.state;
    const value = this.props.value || "";
    const fieldName = this.props.field_name || "";

    if (collapse && !value) {
      return (
        <button
          className={`btn btn-default ${s["btn-pill"]}`}
          onClick={this.onCollapseButtonClick}
        >
           Add {fieldName}
        </button>
      );
    }

    return (
      <textarea
        style={this.props.style}
        className={classname}
        value={this.props.value || ""}
        disabled={!this.props.editable}
        onClick={this.props.onClick}
        placeholder={this.props.placeholder}
        onChange={this.props.onChange}
        onBlur={this.props.onBlur}
      />
    );
  }
}

SimpleTextArea.defaultProps = {
  defaultValue: "",
  editable: true,
  className: "",
  onChange: value => {
    console.log(value);
  },
  onBlur: () => {},
};
// ------------------------ End Simple Textarea Element ------------------------

export default withStyles(s)(SimpleTextArea);
