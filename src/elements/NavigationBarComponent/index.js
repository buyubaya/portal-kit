import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import NavigationCellComponent from "../NavigationCellComponent";
import s from "./style.less";

const classNames = require("classnames");


class NavigationBarComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    onClick: PropTypes.func,
    className: PropTypes.string,
    logo: PropTypes.element,
    avatar: PropTypes.element,
  };
  constructor(props){
    super(props);
    this.state = {
      items: props.items,
    };
  }
  onItemClick = (key) => {
    const cells = this.state.items.map((val, i) => {
      const val1 = val;
      val1.active = false;
      val1.open = false;
      if (i === key) {
        val1.active = true;
      }
      if (val.dropdown && i === key) {
        val1.open = true;
      }
      return val1;
    });
    this.setState({ items: cells });
  }
  render() {
    const classname = classNames(this.props.className);

    const cells = this.state.items.map((val, i) => (
      <NavigationCellComponent
        dropdown={val.dropdown}
        value={val.value}
        open={val.open}
        active={val.active}
        key={i}
        onClick={() => this.onItemClick(i)}
      />
    ));
    return (
      <ul className={classname} onClick={this.props.onClick}>
        {this.props.logo}
        {cells}
        {this.props.avatar}
      </ul>
    );
  }
}

NavigationBarComponent.defaultProps = {
  items: [],
  onClick: e => {
    console.log(e.target);
  },
};

export default withStyles(s)(NavigationBarComponent);
