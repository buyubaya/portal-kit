import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

const classNames = require("classnames");


class SimpleCheckBoxComponent extends Component {

  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    reverseTitle: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.checked,
    });
  }

  onChange = () => {
    const value = !this.state.checked;
    this.setState({ checked: value });
    // console.log(e.target.checked);
    this.props.onChange(value);
  }

  render() {
    const classname = classNames(this.props.className, {
      checkbox: true,
    });
    const reverseTitle = this.props.reverseTitle;
    const value = this.props.value;
    return (
      <div className={classname}>
        <label htmlFor={this.props.name}>
          {reverseTitle ? value : null}
          {" "}
          <input
            disabled={this.props.disabled}
            name={this.props.name}
            checked={this.state.checked}
            type="checkbox"
            onChange={this.onChange}
          />
          {" "}
          {!reverseTitle ? value : null}
        </label>
      </div>
    );
  }
}

SimpleCheckBoxComponent.defaultProps = {
  onChange: () => {},
  checked: false,
  disabled: false,
};

export default withStyles(s)(SimpleCheckBoxComponent);
