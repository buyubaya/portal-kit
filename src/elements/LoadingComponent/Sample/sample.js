import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import LoadingComponent from "../index";

class LoadingSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="Loading" />
        <h1> Information </h1><br />
        <p> Loading in NAB Portal. Use Boostrap default.</p> <br />
        <h1> Sample </h1><br />
        <LoadingComponent />
      </div>
    );
  }
}

export default withStyles()(LoadingSample);
