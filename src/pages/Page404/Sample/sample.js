import Helmet from "react-helmet";
import React, { Component } from "react";

import withStyles from "isomorphic-style-loader/lib/withStyles";

import s from "./sample.less";

import markdownStyle from "../../../resources/css/markdown.css";
import Page404 from "../index";

// const classNames = require("classnames");
const html = require("../README.md");

class Page404Sample extends Component {
  render() {
    return (
      <div>
        <Helmet title="404 page" />
        <h1>Information</h1><br />
        <p>Simple 404 error page in NAB portal.</p><br />
        <h1>404 page</h1><br />
        <div>
          example code:<br />
          <code>
            {"<Page404 />"}<br />
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
          className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: html }}
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
          <Page404 />
        </div>
      </div>
    );
  }
}
export default withStyles(s, markdownStyle)(Page404Sample);
