import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import constant from "../../constant";

class Page404 extends Component {
  static propTypes = {
    contactEmail: PropTypes.string,
  };
  render() {
    const email = this.props.contactEmail || constant.DEFAULT_CONTACT_EMAIL;
    const pageClassName = [];
    pageClassName.push(s["page-not-found"]);
    pageClassName.push(s["abs-middle-vertical-block"]);

    return (
      <div className={pageClassName.join(" ")}>
        <Helmet title="Not Found" />
        <h1>Page Not Found</h1>
        <h4>Please check your URL. This page may not be available to you.</h4>
        <h4>
          <a href={`mailto:${email}`}>Contact us</a> if you have any question.
        </h4>
      </div>
    );
  }
}

export default withStyles(s)(Page404);
