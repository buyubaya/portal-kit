import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import SimpleTextArea from "./SimpleTextArea";
import EditInlineTextarea from "./EditInlineTextarea";

import { isomorphicClassNames } from "../../helper/utils";

// ------------------------   Textarea Element ------------------------
class TextAreaComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    editable: PropTypes.bool,
    inline_mode: PropTypes.bool,
    resize: PropTypes.bool,
    onInput: PropTypes.func,
    onChange: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
  };
  constructor(props){
    super(props);
    this.state = {
      value: props.value || "",
      origin_value: props.value || "",
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      origin_value: nextProps.value,
    });
  }
  onChange = (value) => {
    const text = value.target.value;
    this.setState({ value: text });
    this.props.onChange(text);
  }
  onSaveText = () => {
    this.setState({
      origin_value: this.state.value,
    });
    this.props.onSave();
  }
  onCancelText = () => {
    this.setState({
      value: this.state.origin_value,
    });
    this.props.onCancel();
  }
  render() {
    const { resize, ...other } = this.props;
    const inlineMode = this.props.inline_mode;
    const classname = isomorphicClassNames(
      s,
      "form-control",
      s["simple-textarea"],
      {
        "disable-resize": !resize,
      },
      this.props.className,
    );

    other.className = classname;

    if (inlineMode) {
      return (
        <EditInlineTextarea
          {...other}
          onChange={this.onChange}
          value={this.state.value}
          onSaveText={this.onSaveText}
          onCancelText={this.onCancelText}
        />
      );
    }
    return (
      <SimpleTextArea
        {...other}
        onChange={this.onChange}
        value={this.state.value}
      />
    );
  }
}

TextAreaComponent.defaultProps = {
  defaultValue: "",
  editable: true,
  className: "",
  resize: false,
  onChange: () => {},
  onBlur: () => {},
  onSave: () => {},
  onCancel: () => {},
};
// ------------------------ End  Textarea Element ------------------------

export default withStyles(s)(TextAreaComponent);
