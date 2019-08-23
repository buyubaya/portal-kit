import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import LabelComponent from "../index";
import constant from "../../../constant";

import s from "./sample.less";

import PropsTableComponent from "../../../../samples/PropsTableComponent";

class LabelSample extends Component {
  render() {
    const tableData = {
      rows: [
        ["value", "string", "", "Label title value"],
        [
          "bsType",
          "one of: 'primary', 'info', 'danger', 'success', 'warning', 'default'",
          "'default'",
          "Label type",
        ],
        ["icon", "string", "", "Label icon"],
        ["crossButton", "boolean", "", "Allow show cross button"],
        ["onClick", "function", "undefined", "on label click handle"][
          ("onCrossButtonClick", "function", "undefined", "on label cross click handle")
        ],
        ["className", "string", "undefined", "Custome style"],
      ],
    };
    return (
      <div>
        <Helmet title="Label" />
        <h1> Information </h1><br />
        <p> LabelComponent in NAB Portal. Use Boostrap default.</p> <br />
        <h1> Sample </h1><br />
        <h4> Full </h4>
        <LabelComponent value="label" icon={"user"} crossButton />
        <div>
          example code:<br />
          <code>
            {"<LabelComponent value='label' icon={'user'} crossButton/>"}<br />
          </code>
          <br />
        </div>
        <h4 className={s["padding-header"]}> Optional </h4>
        <LabelComponent
          value="primary"
          bsStyle={constant.COMPONENT_TYPE.PRIMARY}
        />
        <br />
        <LabelComponent
          value="success"
          bsStyle={constant.COMPONENT_TYPE.SUCCESS}
        />
        <br />
        <LabelComponent value="info" bsStyle={constant.COMPONENT_TYPE.INFO} />
        <br />
        <LabelComponent
          value="warning"
          bsStyle={constant.COMPONENT_TYPE.WARNING}
        />
        <br />
        <LabelComponent
          value="danger"
          bsStyle={constant.COMPONENT_TYPE.DANGER}
        />
        <div>
          example code:<br />
          <code>
            {"<LabelComponent value='primary'  bsStyle={'primary'}/>"}<br />
          </code>
          <br />
        </div>
        <h4 className={s["padding-header"]}> Different Label Sizes </h4>
        <h1><LabelComponent value="label" /></h1><br />
        <h2><LabelComponent value="label" /></h2><br />
        <h3><LabelComponent value="label" /></h3><br />
        <p><LabelComponent value="label" /></p><br />

        <div>
          example code:<br />
          <code>
            {"<h1><LabelComponent value='label' /></h1>"}<br />
          </code>
          <br />
          <code>
            {"<h2><LabelComponent value='label' /></h2>"}<br />
          </code>
          <br />
          <code>
            {"<h3><LabelComponent value='label' /></h3>"}<br />
          </code>
          <br />
        </div>
        <h1>Props:</h1>
        <PropsTableComponent table_data={tableData} />
      </div>
    );
  }
}

export default withStyles(s)(LabelSample);
