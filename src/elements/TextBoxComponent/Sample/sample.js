import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import TextBoxComponent from "../index";
import constant from "../../../constant";

import PropsTableComponent from "../../../../samples/PropsTableComponent";

import s from "./sample.less";

class TextBoxSample extends Component {
  render() {
    const tableData = {
      rows: [
        ["placeholder", "string", "undefined", "Textbox placeholder"],
        ["className", "string", "undefined", "Custom class"],
        ["editable", "boolean", "true", "Textbox allow edit"],
        ["size", "one of: 'large', 'small'", "", "false"],
        ["name", "string", "", ""],
        ["type", "string", "", ""],
        ["inline_mode", "boolean", "undefined", "Allow edit inline"],
        ["onChange", "function", "", ""],
        ["onInput", "function", "", ""],
        ["onBlur", "function", "", ""],
        ["onSave", "function", "", "require inline_mode"],
        ["onCancel", "function", "", "require inline_mode"],
      ],
    };
    return (
      <div>
        <Helmet title="TextBox" />
        <h1> Information </h1><br />
        <p>
          {" "}Simple form input in NAB portal. Some element utilise bootstrap default and other are our customised version.
        </p>
        {" "}
        <br />

        <h1> Text </h1><br />
        <div>
          <p> Empty & Defocused Empty </p>
          <TextBoxComponent placeholder="con heo" />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextBoxComponent placeholder=\"con heo\"/>"}<br />
          </code>
          <br />
        </div>
        <div>
          <p> With Text </p>
          <TextBoxComponent value="con heo, con meo, con ca keo" />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextBoxComponent value=\"con heo, con meo, con ca keo\"/>"}<br />
          </code>
          <br />
        </div>
        <div>
          <p> Size large </p>
          <TextBoxComponent
            placeholder="con heo"
            size={constant.COMPONENT_SIZE.LARGE}
          />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextBoxComponent placeholder=\"con heo\"\" size={\"large\"}/>"}<br />
          </code>
          <br />
        </div>
        <div>
          <p> Size small </p>
          <TextBoxComponent
            value="con heo, con meo, con ca keo"
            size={constant.COMPONENT_SIZE.SMALL}
          />
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<TextBoxComponent value=\"con heo, con meo, con ca keo\" size={\"small\"}/>"
            }
            <br />
          </code>
          <br />
        </div>

        <h1> Text - Inline Editing</h1><br />
        <div>
          <p> Empty & Defocused Empty </p>
          <TextBoxComponent placeholder="con heo" inline_mode />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextBoxComponent placeholder=\"con heo\" inline_mode={true}/>"}
            <br />
          </code>
          <br />
        </div>
        <div>
          <p> With Text </p>
          <TextBoxComponent value="con heo, con meo, con ca keo" inline_mode />
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<TextBoxComponent value=\"con heo, con meo, con ca keo\" inline_mode={true}/>"
            }
            <br />
          </code>
          <br />
        </div>

        <h1>Props:</h1>
        <PropsTableComponent table_data={tableData} />
      </div>
    );
  }
}

export default withStyles(s)(TextBoxSample);
