import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import TableRowComponent from "./TableRowComponent";
import LoadingComponent from "../../elements/LoadingComponent";

// import constant from "../../constant";
const classNames = require("classnames");

class TableComponent extends Component {
  static propTypes = {
    rows: PropTypes.array,
    header: PropTypes.array,
    className: PropTypes.string,
  };
  onRowClick() {
    /* eslint class-methods-use-this:"off" */
    console.log("row clicked");
  }
  render() {
    const classname = classNames("table", {}, this.props.className);

    const { headers, rows } = this.props || [];
    let count = 0;
    return (
      <table className={classname}>
        <thead>
          <tr>
              {headers &&
              headers.map((header, i) => {
                if (header.hidden) return null;
                count++;
                return (
                  <th
                    key={i}
                    className={header.className}
                    onClick={header.onClick}
                  >
                    {header.value} {header.sort_icon} {header.sub_component}
                  </th>
                );
              })}
          </tr>
        </thead>
        <tbody>
            {this.props.loading
            ? <tr>
              <td colSpan={count}>
                <LoadingComponent />
              </td>
            </tr>
            : rows &&
                rows.map(
                  ((row, i) => (
                    <tr key={i}>
                      {row.map((cell, i) => {
                        if (headers[i].hidden) return null;

                        return (
                          <td
                            key={`cellData-${i}`}
                            className="vertical-middle"
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                    )),
                )}
        </tbody>
      </table>
    );
  }
}

export default withStyles(s)(TableComponent);
