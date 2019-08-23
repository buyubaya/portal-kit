import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import s from './style.less';

import constant from "../../constant";

class LoadingComponent extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", padding: "10px" }}>
        <img
          width="200px"
          height="200px"
          alt=""
          src={constant.DEFAULT_LOADING_PAGE_URL}
        />
      </div>
    );
  }
}

export default withStyles()(LoadingComponent);
