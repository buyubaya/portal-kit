import Helmet from "react-helmet";
import React, { Component } from "react";

// import constant from "../../../constant";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import { multipleClassName } from "../../../helper/utils";

import {
  Row,
  Col,
  ControlLabel,
  FormControl,
  FormGroup,
} from "react-bootstrap";

import SideBarComponent from "../index";
import markdownStyle from "../../../resources/css/markdown.css";

import s from "./sample.less";

const html = require("../README.md");
// const classNames = require("classnames");

class SideBarSample extends Component {
  render() {
    return (
      <div>
        <Helmet title="Side bar" />
        <h1>Information</h1><br />
        <p>Sidebar use in NAB portal. Use boostrap default.</p><br />
        <h1>Examples</h1><br />
        <Row>
          <Col md={12}>
            <Col md={4}>
              <SideBarComponent>
                <FormGroup>

                  <ControlLabel>Input Text 1</ControlLabel>
                  <FormControl type="text" />

                </FormGroup>
                <FormGroup>
                  <ControlLabel>Input Text 2</ControlLabel>
                  <FormControl type="text" />
                </FormGroup>
              </SideBarComponent>
            </Col>
            <Col md={8} />
          </Col>
        </Row>
        <br />
        <div>
          example code:<br />
          <code>
            {"<Row>"}<br />
            &nbsp;&nbsp;{"<Col md={12}>"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"<Col md={4}>"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"<SideBarComponent >"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {
              "<FormGroup><ControlLabel>Input Text 1</ControlLabel><FormControl type='text' /></FormGroup>"
            }
            <br />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {
              "<FormGroup><ControlLabel>Input Text 2</ControlLabel><FormControl type='text' /></FormGroup>"
            }
            <br />

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"</SideBarComponent>"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"</Col><br /><Col md={8}></Col>"}<br />
            &nbsp;&nbsp;{"</Col>"}<br />
            {"</Row>"}<br />
          </code>
          <br />
        </div>
        <br />
        <br />
        <br />
        <div
          className={markdownStyle.markdown}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  }
}

export default withStyles(s, markdownStyle)(SideBarSample);
