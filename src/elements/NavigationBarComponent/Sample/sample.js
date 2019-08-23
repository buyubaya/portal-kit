import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import NavigationBarComponent from "../index";
// import SimpleTextBoxComponent from '../../SimpleTextBoxComponent/index'
import SimpleImageComponent from "../../SimpleImageComponent/index";
import Avatar from "../../AvatarComponent/index";
import constant from "../../../constant";

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
class NavigationBarSample extends Component {
  render() {
    return (
      <div>
        <h1> Information </h1><br />
        <p> Alert Component in NAB Portal. Use Boostrap default.</p> <br />
        <h1> Component </h1><br />
        <h4> Use bootstrap default </h4>
        <NavigationBarComponent items={dataDefault} />
        <h4> exapmle in NAB Portal </h4>
        <NavigationBarComponent
          items={dataNab}
          logo={<SimpleImageComponent url={constant.DEFAULT_LOGO} />}
          avatar={<Avatar size="small" />}
        />
      </div>
    );
  }
}

export default withStyles()(NavigationBarSample);
