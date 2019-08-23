import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Pagination from "../../elements/Pagination/"; // change to custom pagination when upgrade to new bootstrap

// import { Pagination } from "react-bootstrap";

import s from "./style.less";

const classNames = require("classnames");

class PaginationTableComponent extends Component {
  static propTypes = {
    rowsData: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    rowRenderer: PropTypes.func.isRequired,
    onSelectPage: PropTypes.func,
    bordered: PropTypes.bool,
    forceCellMiddle: PropTypes.bool,
    pagerTop: PropTypes.bool,
    pagerBottom: PropTypes.bool,
    striped: PropTypes.bool,
    itemPerPage: PropTypes.number,
    className: PropTypes.string,
    rowClassName: PropTypes.string,
    headClassName: PropTypes.string,
    paginator: PropTypes.object,
    children: PropTypes.element,
    emtyText: PropTypes.string,
    // itemPerPage: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    const state = Object.assign({}, this.props);
    state.currentPage = 1;

    this.state = state;
  }

  onRowClick = () => {
    console.log("row clicked");
  };

  handleSelectPage = eventKey => {
    this.setState({
      currentPage: eventKey,
    });
    this.props.onSelectPage(eventKey);
  };

  render() {
    const classname = classNames(
      "table",
      {
        "table-bordered": this.props.bordered,
        "table-striped": this.props.striped,
      },
      s["pagination-table"],
      this.props.className,
    );
    const rows = [];
    const { headers, rowsData, paginator } = this.props;
    let numPages = 0;
    let currentPage = 0;
    let pager = null;

    if (paginator) {
      // const { page, pageSize, rowCount, pageCount } = paginator;
      const { page, pageCount } = paginator;

      for (let i = 0; i < rowsData.length; i++) {
        rows.push(this.props.rowRenderer(rowsData[i]));
      }
      numPages = pageCount;
      currentPage = page;
    } else {
      const length = this.props.rowsData ? this.props.rowsData.length : 0;
      numPages = Math.ceil(length / this.props.itemPerPage);
      currentPage = Math.min(numPages, Math.max(this.state.currentPage - 1, 0));

      for (
        let i = currentPage * this.props.itemPerPage;
        i < Math.min((currentPage + 1) * this.props.itemPerPage, rowsData.length);
        i++
      ) {
        rows.push(this.props.rowRenderer(rowsData[i]));
      }

      currentPage += 1;
    }

    if (numPages > 1) {
      pager = (
        <div className="row" style={{ textAlign: "center" }}>
          <Pagination
            prev
            next
            first
            last
            ellipsis
            boundaryLinks
            bsSize="medium"
            items={numPages}
            maxButtons={10}
            activePage={currentPage}
            onSelect={this.handleSelectPage}
          />
        </div>
      );
    }

    const { pagerTop, pagerBottom, emtyText } = this.props;

    return (
      <div style={{ marginBottom: 20 }}>
        {pagerTop ? pager : null}
        <table className={classname}>
          <thead>
            <tr className={this.props.headClassName}>
              {headers &&
                headers.map((header, i) => {
                  if (!header || header.hidden) {
                    return null;
                  }
                  const sortableClass = {};
                  sortableClass[s["th-sortable"]] = header.sortable;
                  sortableClass[s["pointer-cursor"]] = header.sortable;
                  const headerClass = classNames(header.className, sortableClass);
                  return (
                    <th key={i} className={headerClass} onClick={header.onClick}>
                      {header.value} {header.sort_icon} {header.sub_component}
                    </th>
                  );
                })}
            </tr>
          </thead>
          <tbody>
            {rows.length > 0
              ? rows.map((row, i) => {
                if (!row) {
                  return null;
                }
                if (!Array.isArray(row)) {
                  const { className = "", cells = [] } = row;
                  return (
                    <tr key={i} className={`${this.props.rowClassName} ${className}`}>
                      {cells.map((cell, j) => {
                        if (headers && headers[j] && headers[j].hidden) {
                          return null;
                        }

                        return (
                          <td
                            key={`cellData-${j}`}
                            className={this.props.forceCellMiddle ? s["vertical-middle"] : ""}
                          >
                            {cell}
                          </td>
                        );
                      })}
                    </tr>
                  );
                }
                return (
                  <tr key={i} className={this.props.rowClassName}>
                    {row.map((cell, j) => {
                      if (headers && headers[j] && headers[j].hidden) {
                        return null;
                      }

                      return (
                        <td
                          key={`cellData-${j}`}
                          className={this.props.forceCellMiddle ? s["vertical-middle"] : ""}
                        >
                          {cell}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
              : null}
          </tbody>
        </table>

        {rows.length === 0 && (
          <div style={{ textAlign: "center" }}>{emtyText || "Nothing to Show"}</div>
        )}

        {pagerBottom ? pager : null}

        {this.props.children}
      </div>
    );
  }
}

PaginationTableComponent.defaultProps = {
  pagerBottom: true,
  itemPerPage: 100,
  rowsData: [],
  onSelectPage: () => {},
  headers: [],
};

export default withStyles(s)(PaginationTableComponent);
