import React, { Component } from "react";
import Helmet from "react-helmet";

// import MasterLayout from "../../../layouts/MasterLayout";
// import constant from "../../../constant";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import {
  NavItem,
  Navbar,
  FormGroup,
  FormControl,
  Button,
} from "react-bootstrap";

import NavigationBarComponent from "../index";

// const classNames = require("classnames");

const headerElement = <a href="#"> Header Text </a>;

const rightElementItems = [
  { action: "#", content: "Setting" },
  { action: "#", content: "Help" },
  { action: "#", content: "Exit" },
];
const rightElement = rightElementItems.map((item, index) => (
  <NavItem key={index} eventKey={index} href={item.action}>
    {item.content}
  </NavItem>
));

const textElementItems = [
  { content: "Signed in as: ", action: "#", action_title: "Andrew" },
];
const textElement = textElementItems.map((item, index) => (
  <span key={index}>
    {" "}
    {item.content}
    {" "}
    <Navbar.Link href={item.action}>{item.action_title}</Navbar.Link>
    {" "}
  </span>
));

const formElementItems = {
  type: "text",
  placeholder: "placeholder",
  submit: "Submit",
};
const formElement = (
  <div>
    <FormGroup>
      <FormControl
        type={formElementItems.type}
        placeholder={formElementItems.placeholder}
      />
    </FormGroup>
    <Button type="submit">{formElementItems.submit}</Button>
  </div>
);

const childrenItems = [
  { content: "drop down 1" },
  { content: "drop down 2" },
  { divider: true },
  { content: "drop down 3" },
  { content: "drop down 4" },
  { divider: true },
  { content: "drop down 5" },
  { content: "drop down 6" },
];

const listItems = [
  { content: "item 1" },
  { content: "item 2" },
  { content: "item 3", children: childrenItems },
  { content: "item 4" },
  { content: "item 5" },
];

class NavigationHeaderSample extends Component {
  onItemClick(el) {
    console.log(`clicked on item: ${el.content}`);
  }
  render() {
    return (
      <div>
        <Helmet title="Navigation Header" />
        <h1> Information </h1><br />
        <p> Alert Component in NAB Portal. Use Bootrap default.</p> <br />
        <h1> Component </h1><br />
        <NavigationBarComponent
          onItemClick={this.onItemClick}
          header={headerElement}
          items={listItems}
          formElement={formElement}
          textElement={textElement}
          rightElement={rightElement}
        />
      </div>
    );
  }
}
export default withStyles()(NavigationHeaderSample);
