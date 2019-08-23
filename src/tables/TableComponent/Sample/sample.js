import Helmet from "react-helmet";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import React from "react";

import TableComponent from "../index";
// import MasterLayout from "../../../layouts/MasterLayout";
import constant from "../../../constant";

// const classNames = require("classnames");

import s from "./sample.less";

const headerData = [
  { value: "Name" },
  { value: "Double-Line Header" },
  { value: "Signed Up" },
];

const rowData = [
  {
    name: "John Boo",
    avatar: constant.DEFAULT_AVATAR_URL,
    date: "15 Sep, 8:56 AM",
    year: "2013",
  },
  {
    name: "Micheal Robinson",
    avatar: constant.DEFAULT_AVATAR_URL,
    date: "15 Sep, 7:12 AM",
    year: "2013",
  },
  {
    name: "Jannifer Pinsker",
    avatar: constant.DEFAULT_AVATAR_URL,
    date: "15 Sep, 2:08 AM",
    year: "2013",
  },
  {
    name: "Alexander Robson",
    avatar: constant.DEFAULT_AVATAR_URL,
    date: "15 Sep, 4:34 AM",
    year: "2013",
  },
];

class TableSample extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Table" />
        <h1> Information </h1><br />
        <p>
          {" "}Tables use in NAB portal. Use boostrap default. Table has function to sort information.
        </p>
        {" "}
        <br />
        <h1> Examples </h1><br />
        <TableComponent headers={headerData} rows={rowData} />
      </div>
    );
  }
}

export default withStyles(s)(TableSample);
