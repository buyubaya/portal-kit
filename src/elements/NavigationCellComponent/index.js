import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import DropdownComponent from "../DropdownComponent";
import s from "./style.less";

const classNames = require("classnames");

class NavigationCellComponent extends Component {
  static propTypes = {
    active: PropTypes.bool,
    open: PropTypes.bool,
    count: PropTypes.number,
    value: PropTypes.string,
    onClick: PropTypes.func,
    dropdown: PropTypes.array,
    children: PropTypes.element,
  };
  render() {
    const classname = classNames({
      active: !!this.props.active,
      open: !!this.props.open,
      dropdown: !!this.props.dropdown,
    });
    // const count = this.props.count
    //   ? React.createElement("span", { className: "badge" }, this.count)
    //   : null;
    return (
      <li
        role="presentation"
        className={classname}
        onClick={this.props.onClick}
      >
        {this.props.children ? this.props.children : null}
        {this.props.dropdown
          ? <DropdownComponent
            items={this.props.dropdown}
            title={this.props.value}
            bsStyle="link"
          />
          : React.createElement("a", {}, this.props.value)}
      </li>
    );
  }
}

NavigationCellComponent.defaultProps = {
  open: false,
  onClick: e => {
    console.log(e);
  },
};

export default withStyles(s)(NavigationCellComponent);
