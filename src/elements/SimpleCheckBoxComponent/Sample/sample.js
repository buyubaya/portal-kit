import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import SimpleCheckBoxComponent from "../index";

import PropsTableComponent from "../../../../samples/PropsTableComponent";

class CheckBoxSample extends Component {
  render() {
    const tableData = {
      rows: [
        ["checked", "boolean", "false", "Checked value"],
        ["disabled", "boolean", "undefined", "Allow check/uncheck"],
        ["value", "string", "", "Checkbox title"],
        ["className", "string", "", "Custom class"],
        ["onChange", "function", "", "Toggle checked value"],
      ],
    };
    return (
      <div>
        <Helmet title="Checkbox" />
        <h1> Information </h1><br />
        <p> Checkbox in NAB Portal. Use Bootrap material ui.</p> <br />
        <h1> Sample </h1><br />
        <h4> Checked</h4>
        <SimpleCheckBoxComponent checked />

        <div>
          example code:<br />
          <code>
            {"<SimpleCheckBoxComponent checked={true}/>"}<br />
          </code>
          <br />
        </div>

        <h4> Unchecked </h4>
        <SimpleCheckBoxComponent />
        <div>
          example code:<br />
          <code>
            {"<SimpleCheckBoxComponent />"}<br />
          </code>
          <br />
        </div>

        <h4> Disabled </h4>
        <SimpleCheckBoxComponent disabled />
        <div>
          example code:<br />
          <code>
            {"<SimpleCheckBoxComponent disabled={true} />"}<br />
          </code>
          <br />
        </div>

        <h1>Props:</h1>
        <PropsTableComponent table_data={tableData} />
      </div>
    );
  }
}

export default withStyles()(CheckBoxSample);
