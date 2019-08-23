
/* eslint max-len:"off" */

import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import TextAreaComponent from "../index";

import s from "./sample.less";
import PropsTableComponent from "../../../../samples/PropsTableComponent";

class TextAreaSample extends Component {
  render() {
    const tableData = {
      rows: [
        ["value", "string", "", "Textarea value"],
        ["editable", "boolean", "true", "Allow edit"],
        ["resize", "boolean", "undefined", "Allow resize Textarea"],
        ["inline_mode", "boolean", "undefined", "Allow edit inline mode"],
        ["collapse", "boolean", "undefined", "Collapse mode"],
        ["onChange", "function", "", ""],
        ["onBlur", "function", "", ""],
        ["onSave", "function", "", "require inline_edit"],
        ["onCancel", "function", "", "require inline_edit"],
      ],
    };

    return (
      <div>
        <Helmet title="TextArea" />
        <h1>Information</h1><br />
        <p>
          Simple form input in NAB portal. Some element utilise bootstrap default and other are our customised version.
        </p>
        <br />
        <h1>Text Area Persistent</h1><br />
        <div>
          <p>Empty & Defocused Empty</p>
          <TextAreaComponent placeholder="con heo" />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextAreaComponent placeholder=\"con heo\"/>"}<br />
          </code>
          <br />
        </div>
        <div>
          <p>With Text</p>
          <TextAreaComponent value="con heo, con meo, con ca keo" resize />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextAreaComponent value=\"con heo, con meo, con ca keo\" resize/>"}
            <br />
          </code>
          <br />
        </div>
        <h1>Textarea Collapsable</h1><br />
        <div>
          <p>Empty & Defocused Empty</p>
          <TextAreaComponent collapse field_name="Text" resize />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextAreaComponent collapse={true} field_name=\"Text\" resize/>"}
            <br />
          </code>
          <br />
        </div>
        <h1>Textarea - Inline Editing</h1><br />
        <div>
          <p>Empty & Defocused Empty</p>
          <TextAreaComponent placeholder="con heo" inline_mode />
        </div>
        <div>
          example code:<br />
          <code>
            {"<TextAreaComponent placeholder=\"con heo\" inline_mode={true}/>"}
            <br />
          </code>
          <br />
        </div>
        <div>
          <p>With Text</p>
          <TextAreaComponent value="con heo, con meo, con ca keo" inline_mode />
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<TextAreaComponent value=\"con heo, con meo, con ca keo\" inline_mode={true}/>"
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

export default withStyles(s)(TextAreaSample);
