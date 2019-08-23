import Helmet from "react-helmet";
import React from "react";

// import { Row, Col } from "react-bootstrap";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import PaginationTableComponent from "../index";
// import MasterLayout from "../../../layouts/MasterLayout";
// import constant from "../../../constant";
import { multipleClassName } from "../../../helper/utils";

import markdownStyle from "../../../resources/css/markdown.css";


import s from "./sample.less";

const html = require("../README.md");
// const classNames = require("classnames");
class PaginationTableSample extends React.Component {
  rowRenderer(row) {
    const rows = [
      <span>{row.name}</span>,
      <span>{row.pos}</span>,
      <span>{row.date}</span>,
    ];
    return rows;
  }
  render() {
    const headers = [
      {
        value: "Name",
        className: multipleClassName(["col-md-1", s["pointer-cursor"]]),
      },
      {
        value: "Pos",
        className: multipleClassName(["col-md-1", s["pointer-cursor"]]),
      },
      {
        value: "Time",
        className: multipleClassName(["col-md-1", s["pointer-cursor"]]),
      },
    ];
    const rowsData = [
      { name: "John Boo", pos: "mid", date: "15 Sep, 8:56 AM", year: "2013" },
      {
        name: "Micheal Robinson",
        pos: "striker",
        date: "15 Sep, 7:12 AM",
        year: "2013",
      },
      {
        name: "Jannifer Pinsker",
        pos: "def",
        date: "15 Sep, 2:08 AM",
        year: "2013",
      },
      {
        name: "Alexander Robson",
        pos: "gk",
        date: "15 Sep, 4:34 AM",
        year: "2013",
      },
    ];
    return (
      <div>
        <Helmet title="Pagination table" />
        <h1>Information</h1><br />
        <p>Tables use in NAB portal. Use boostrap default.</p><br />
        <h1>Examples</h1><br />
        <PaginationTableComponent
          headers={headers}
          rowsData={rowsData}
          rowRenderer={this.rowRenderer}
        />
        <br />
        <div>
          example code:<br />
          <code>
            {
              "<PaginationTableComponent headers={headers} rowsData={rows_data} rowRenderer={this.rowRenderer} />"
            }
            <br />
          </code>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div
          className={markdownStyle.markdown}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}

export default withStyles(s, markdownStyle)(PaginationTableSample);
