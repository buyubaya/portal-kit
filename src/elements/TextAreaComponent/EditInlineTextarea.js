import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import FormEditInline from "../../higher_order_components/FormEditInline";

const classNames = require("classnames");

class EditInlineTextarea extends Component {
  static propTypes = {
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    style: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    editable: PropTypes.bool,
    editing: PropTypes.bool,
    onInput: PropTypes.func,
    onEditTextClick: PropTypes.func,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onSaveText: PropTypes.func,
    onCancelText: PropTypes.func,
  };
  render() {
    const classname = classNames(
      "form-control",
      s["simple-textarea"],
      this.props.className,
    );
    const editing = this.props.editing || false;
    if (!editing) {
      return (
        <div
          className={s["form-input-inline-view-mode"]}
          dangerouslySetInnerHTML={{ __html: this.props.value }}
          onClick={this.props.onEditTextClick}
        />
      );
    }
    return (
      <div>
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
        <div className={s["simple-button-group"]}>
          <button
            onClick={this.props.onSaveText}
            className="btn btn-default btn-success"
          >
             Save
          </button>
          <button onClick={this.props.onCancelText} className="btn btn-default">
             Cancel
          </button>
        </div>
      </div>
    );
  }
}

EditInlineTextarea.defaultProps = {
  defaultValue: "",
  editable: true,
  className: "",
  onChange: () => {},
  onBlur: () => {},
};

export default withStyles(s)(FormEditInline(EditInlineTextarea));
