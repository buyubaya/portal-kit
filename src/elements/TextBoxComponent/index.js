import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import constant from "../../constant";

import EditInlineTextBox from "./EditInlineTextBox";
import SimpleTextBox from "./SimpleTextBox";

class TextBoxComponent extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    className: PropTypes.string,
    editable: PropTypes.bool,
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
    inline_mode: PropTypes.bool,
    onChange: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func,
  };
  constructor(props){
    super(props);
    this.state = {
      value: props.value || "",
      originValue: props.value || "",
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
      originValue: nextProps.value || "",
    });
  }
  onChange = (element) => {
    const text = element.target.value;
    this.setState({ value: text });
    this.props.onChange(text);
  }
  onSaveText = () => {
    console.log("save text click");
    this.setState({
      originValue: this.state.value,
    });
    this.props.onSave();
  }
  onCancelText = () => {
    console.log("cancel text click");
    this.setState({
      value: this.state.originValue,
    });
    this.props.onCancel();
  }
  render() {
    const { ...other } = this.props;
    const inlineMode = this.props.inline_mode;

    if (inlineMode) {
      return (
        <EditInlineTextBox
          value={this.state.value}
          {...other}
          onSaveText={this.onSaveText}
          onCancelText={this.onCancelText}
          onChange={this.onChange}
        />
      );
    }
    return (
      <SimpleTextBox
        value={this.state.value}
        {...other}
        onChange={this.onChange}
      />
    );
  }
}

TextBoxComponent.defaultProps = {
  type: "text",
  editable: true,
  className: "",
  onChange: () => {},
  onInput: () => {},
  onBlur: () => {},
  inline_mode: false,
  onSave: () => {},
  onCancel: () => {},
};

export default withStyles(s)(TextBoxComponent);
