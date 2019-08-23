import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Navbar } from "react-bootstrap";

import s from "./style.less";

class NavigationBarForm extends Component {
  static propTypes = {
    formElement: PropTypes.string,
  }
  render() {
    const formElement = this.props.formElement || [];
    return (
      <Navbar.Form pullLeft>
        {formElement}
      </Navbar.Form>
    );
  }
}

export default withStyles(s)(NavigationBarForm);
