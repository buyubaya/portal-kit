import React, { Component } from "react";
import PropTypes from "prop-types";

const classNames = require("classnames");

const ReactQuill = require("react-quill");
require("../../../node_modules/quill/dist/quill.snow.css");

const defaultItems = [
  {
    label: "Formats",
    type: "group",
    items: [
      { type: "separator" },
      {
        label: "Size",
        type: "size",
        items: [
          { label: "Small", value: "10px" },
          { label: "Normal", value: "13px", selected: true },
          { label: "Large", value: "18px" },
          { label: "Huge", value: "32px" },
        ],
      },
      { type: "separator" },
      {
        label: "Alignment",
        type: "align",
        items: [
          { label: "", value: "left", selected: true },
          { label: "", value: "center" },
          { label: "", value: "right" },
          { label: "", value: "justify" },
        ],
      },
    ],
  },
  {
    label: "Text",
    type: "group",
    items: [
      { type: "bold", label: "Bold" },
      { type: "italic", label: "Italic" },
      { type: "strike", label: "Strike" },
      { type: "underline", label: "Underline" },
      { type: "separator" },
      { type: "separator" },
      { type: "link", label: "Link" },
    ],
  },
  {
    label: "Blocks",
    type: "group",
    items: [
      { type: "bullet", label: "Bullet" },
      { type: "separator" },
      { type: "list", label: "List" },
    ],
  },
];

// ------------------------ Simple  Textarea Element ------------------------
class SimpleTextAreaComponent extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    style: PropTypes.string,
    container_style: PropTypes.string,
    placeholder: PropTypes.string,
    editable: PropTypes.bool,
    is_rich_text: PropTypes.bool,
    onInput: PropTypes.func,
    onTextInputChange: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
  };
  constructor(props){
    super(props);
    this.state = {
      value: props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.value,
    });
  }
  onInputEvent(e) {
    this.props.onTextInputChange(e.target.value);
    this.setState({ value: e.target.value });
  }
  onChange(value) {
    if (this.props.is_rich_text) {
      this.setState({ value });
      this.props.onChange(value);
      return;
    }
    const text = value.target.value;
    this.props.onChange(text);
  }
  render() {
    const classname = classNames(
      "simple-textarea",
      {
        "rich-text-editor": this.props.is_rich_text,
      },
      this.props.className,
    );
    const isRichText = this.props.is_rich_text;
    if (isRichText) {
      return (
        <ReactQuill
          className={classname}
          theme="snow"
          defaultValue={this.state.value}
          value={this.state.value}
          onChange={this.onChange}
          readOnly={!this.props.editable}
          toolbar={defaultItems}
          style={this.props.container_style}
          placeholder={this.props.placeholder}
        />
      );
    }
    return (
      <textarea
        style={this.props.style}
        onInput={this.props.onInput}
        className={classname}
        value={this.props.value || this.props.defaultValue}
        disabled={!this.props.editable}
        onClick={this.props.onClick}
        placeholder={this.props.placeholder}
        onChange={this.onChange}
        onBlur={this.props.onBlur}
      />
    );
  }
}

SimpleTextAreaComponent.defaultProps = {
  defaultValue: "",
  editable: true,
  className: "form-control",
  onInput: () => {},
  onBlur: () => {},
};
// ------------------------ End Simple Textarea Element ------------------------

export default SimpleTextAreaComponent;
