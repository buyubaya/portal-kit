import React, { Component } from "react";
import Helmet from "react-helmet";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import AlertComponent from "../index";
import constant from "../../../constant";

import PropsTableComponent from "../../../../samples/PropsTableComponent";

class AlertSample extends Component {
  render() {
    const exampleContentWithTag = "<div> component with <br/> line break </div>";

    const tableData = {
      // header: [ "Name","Type","Default","Description"],
      rows: [
        [
          "type",
          "one of: 'danger', 'info', 'success', 'warning'",
          "'info'",
          "Alert Color Type",
        ],
        [
          "content",
          "string|component",
          "undefined",
          "Alert message or chidren component",
        ],
        ["dismiss", "bool", "true", "Allow dissmiss alert"],
        ["className", "string", "undefined", "Custom class"],
      ],
    };
    return (
      <div>
        <Helmet title="Alert" />
        <h1> Information </h1><br />
        <p> Alert Component in NAB Portal. Use Bootrap default.</p> <br />
        <h1> Component </h1><br />
        <h4> Success </h4>
        example :{" "}
        <code>
          {"<AlertComponent content=\"Alert Component\" type={\"success\"} />"}
        </code>
        <br />
        <br />
        <AlertComponent
          content="Alert Component"
          type={constant.COMPONENT_TYPE.SUCCESS}
        />

        <h4> Danger </h4>
        example :{" "}
        <code>
          {"<AlertComponent content=\"Alert Component\" type={\"danger\"} />"}
        </code>
        <br />
        <br />
        <AlertComponent
          content="Alert Component"
          type={constant.COMPONENT_TYPE.DANGER}
        />

        <h4> Info </h4>
        example :{" "}
        <code>
          {"<AlertComponent content=\"Alert Component\" type={\"info\"} />"}
        </code>
        <br />
        <br />
        <AlertComponent
          content="Alert Component"
          type={constant.COMPONENT_TYPE.INFO}
        />

        <h4> Warning </h4>
        example :{" "}
        <code>
          {"<AlertComponent content=\"Alert Component\" type={\"warning\"} />"}
        </code>
        <br />
        <br />
        <AlertComponent
          content="Alert Component"
          type={constant.COMPONENT_TYPE.WARNING}
        />

        <h4> Content with tag </h4>
        example :
        <br />
        {" "}
        <code>
          {
            ` <AlertComponent content={"${exampleContentWithTag}"} type={"warning"} />`
          }
          {" "}
        </code>
        <br />
        <br />
        <AlertComponent
          content={exampleContentWithTag}
          type={constant.COMPONENT_TYPE.WARNING}
        />

        <PropsTableComponent table_data={tableData} bordered />
      </div>
    );
  }
}

export default withStyles()(AlertSample);
