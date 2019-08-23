import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import ContentHeaderComponent from "../index";


import s from "./sample.less";

class HeaderSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="Content Header" />
        <h1> Information </h1><br />
        <p> Header in NAB Portal. Use Bootrap default.</p> <br />
        <h2> Sample </h2><br />
        <ContentHeaderComponent value="Header title" />
        <h2> Editable </h2><br />
        <ContentHeaderComponent value="Header title" editable />
        <h2> Inline Editable </h2><br />
        <ContentHeaderComponent value="Header title" editable editing />
      </div>
    );
  }
}

export default withStyles(s)(HeaderSample);
