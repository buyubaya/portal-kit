import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./style.less";

class HeaderTabBarComponent extends Component {
  static propTypes = {
    onTabItemClick: PropTypes.func,
    items: PropTypes.array,
  };
  onItemClick = (index, event) => {
    event.preventDefault();
    this.props.onTabItemClick(index);
  }
  render() {
    return (
      <div className="header-bottom-tab-bar">
        <ul className="nav nav-tabs container-960 margin-auto">
          {this.props.items.map((item, i) => (
            <li
              role="presentation"
              key={i}
              className={item.active ? "active" : null}
            >
              <a onClick={() => this.onItemClick(i)} href="#">
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(HeaderTabBarComponent);
