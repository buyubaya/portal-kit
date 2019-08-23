import Helmet from "react-helmet";
import React, { Component } from "react";
// const classNames = require("classnames");

import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./sample.less";
import markdownStyle from "../../../resources/css/markdown.css";

import Page403 from "../index";

const html = require("../README.md");

class Page403Sample extends Component {
  render() {
    return (
      <div>
        <Helmet title="403 page" />
        <h1>Information</h1><br />
        <p>Simple 403 error page in NAB portal.</p><br />
        <h1>403 page</h1><br />
        <div>
          example code:<br />
          <code>
            {"<Page403 />"}<br />
          </code>
          <br />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className={markdownStyle.markdown}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Page403 />
        </div>
      </div>
    );
  }
}

export default withStyles(s, markdownStyle)(Page403Sample);
