import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import Avatar from "../../elements/AvatarComponent";

// import constant from '../../constant';

// const classNames = require("classnames");

class TableRowComponent extends Component {
  render() {
    const data = this.props.data || {};
    return (
      <tr className={this.props.type} onClick={this.props.onClick}>
        <td> {data.name} </td>
        <td> <Avatar size="small" /> {data.name} </td>
        <td>
          {data.date} <div className={s["row-year"]}> ({data.year}) </div>
        </td>
      </tr>
    );
  }
}

TableRowComponent.propTypes = {
  type: PropTypes.string,
  data: PropTypes.object,
  onClick: PropTypes.func,
};
TableRowComponent.defaultProps = {
  onClick: e => {
    console.log(e.target);
  },
};

export default withStyles(s)(TableRowComponent);
