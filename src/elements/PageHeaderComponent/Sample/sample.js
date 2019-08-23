import Helmet from "react-helmet";
import React, { Component } from "react";

import withStyles from "isomorphic-style-loader/lib/withStyles";

import PageHeaderComponent from "../index";


const dataDefault = [
  { value: "Brand", open: false, active: false },
  { value: "link", open: false, active: true },
  { value: "link", open: false, active: false },
  {
    value: "Dropdown",
    open: false,
    active: false,
    dropdown: [{ value: "drop 1" }, { value: "drop 2" }],
  },
];
const dataNab = [
  {
    value: "Jobs",
    open: true,
    active: false,
    dropdown: [{ value: "My Jobs" }, { value: "All Jobs" }],
  },
  { value: "Assets", open: false, active: false },
  { value: "People", open: false, active: false },
  { value: "Payment", open: false, active: false },
  { value: "Activity", open: false, active: false },
];
class PageHeaderSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="Page Header" />
        <h1> Information </h1><br />
        <p> Alert Component in NAB Portal. Use Boostrap default.</p> <br />
        <h1> Component </h1><br />
        <h4> Use bootstrap default </h4>
        <PageHeaderComponent navitems={dataDefault} />
        <h4> exapmle in NAB Portal </h4>
        <PageHeaderComponent navitems={dataNab} />
      </div>
    );
  }
}

export default withStyles()(PageHeaderSample);
