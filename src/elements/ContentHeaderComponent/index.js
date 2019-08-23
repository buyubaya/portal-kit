/* eslint react/no-string-refs:"off" */
import React, { Component } from "react";
import PropTypes from "prop-types"
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";

const classNames = require("classnames");

class ContentHeaderComponent extends Component {
  static propTypes = {
    editable: PropTypes.bool,
    editing: PropTypes.bool,
    className: PropTypes.string,
    value: PropTypes.string,
    onSaveTitle: PropTypes.func,
    children: PropTypes.element,
  };
  constructor(props){
    super(props);
    this.state = {
      editing: props.editing,
      value: props.value,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }
  onSaveTitle = () => {
    this.setState({ editing: false, value: this.state.value });
    this.props.onSaveTitle(this.state.value);
  }
  editTitleClickv = () => {
    if (this.props.editable) {
      this.setState({
        editing: true,
        value: this.state.value,
      });
    }
  }
  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    const titleClass = classNames(s["header-content-title"], "form-control", {
      editable: this.props.editable,
      hide: !this.state.editing,
    });
    const contentClass = classNames({
      hide: this.state.editing,
    });
    return (
      <div className={s["content-header"]}>
        <div className={this.props.className}>
          <div className={s.Title}>
            {this.state.editing
              ? <div className="header-input-group flex-start">
                <textarea
                  ref="header_input_title"
                  className={titleClass}
                  defaultValue={this.state.value}
                  onChange={this.handleInputChange}
                />
                <button
                  className="glyphicon glyphicon-ok action-button btn-success"
                  onClick={this.onSaveTitle}
                >
                    Save
                  </button>
              </div>
              : <h2
                ref="header_content_title"
                className={contentClass}
                onDoubleClick={this.editTitleClick}
              >
                {!this.state.editing ? <span>{this.state.value}</span> : null}
              </h2>}

          </div>

          {this.props.children}
        </div>
      </div>
    );
  }
}

ContentHeaderComponent.defaultProps = {
  editing: false,
  onSaveTitle: () => {},
};

export default withStyles(s)(ContentHeaderComponent);
