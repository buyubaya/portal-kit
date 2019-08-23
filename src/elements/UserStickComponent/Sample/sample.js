import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import UserStickComponent from "../index";

import markdownStyle from "../../../resources/css/markdown.css";

import s from "./sample.less";

const html = require("../README.md");


class UserStickSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="User Stick" />
        <h1> Information </h1><br />
        <p> People Link are all users who use van gogh system.</p> <br />
        <h1> People Link States </h1><br />
        <h4> Normal </h4>
        <UserStickComponent user_name="con heo" />
        <h4> When Hover </h4>
        <UserStickComponent user_name="con meo" className={s["user-background"]} />
        <h4> With Subtext </h4>
        <UserStickComponent user_name="con ca keo" subtext="Subtext something" />
        <div>
          example code:<br />
          <code>
            {
              "<UserStickComponent user_name='con ca keo' subtext='Subtext something'/>"
            }<br />
          </code>
          <br />
        </div>
        <br />
        <div
          className={markdownStyle.markdown} dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}

export default withStyles(s, markdownStyle)(UserStickSample);
