import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Col } from "react-bootstrap";

import DropdownComponent from "../index";

import s from "./sample.less";
import PropsTableComponent from "../../../../samples/PropsTableComponent";

const dataText = [
  { value: "Action 1" },
  { value: "Action 2" },
  { value: "Action 3" },
  { value: "Action 4" },
];

const dataText2 = [
  { value: "Action 1" },
  { value: "Action 2" },
  { divider: true },
  { value: "Action 3" },
  { divider: true },
  { value: "Action 4" },
];

const dataIcon = [
  { value: "Action 1", icon: "volume-off" },
  { value: "Action 2", icon: "question-sign" },
  { value: "Action 3", icon: "chevron-left" },
  { value: "Action 4", icon: "info-sign" },
];
const dataIcon2 = [
  { value: "Action 1", icon: "volume-off" },
  { value: "Action 2", icon: "question-sign" },
  { value: "header", header: true },
  { value: "Action 3", icon: "chevron-left" },
  { value: "header", header: true },
  { value: "Action 4", icon: "info-sign" },
];

class DropDownSample extends Component {
  render() {
    const tableData = {
      rows: [
        ["buttonType", "string ('default|split')", "", "Dropdown button type"],
        ["bsSize", "string", "", "Component size variations."],
        [
          "bsStyle",
          "string",
          "",
          "Component visual or contextual style variants.",
        ],
        [
          "componentClass",
          "elementType",
          "ButtonGroup",
          "You can use a custom element type for this component.",
        ],
        ["disabled", "boolean", "", "Whether or not component is disabled."],
        [
          "dropup",
          "boolean",
          "",
          "The menu will open above the dropdown button, instead of below it.",
        ],
        [
          "id (required)",
          "string\"number",
          "",
          "An html id attribute, necessary for assistive technologies, such as screen readers.",
        ],
        ["noCaret", "boolean", "", ""],
        [
          "onClose",
          "function",
          "",
          "A callback fired when the Dropdown closes.",
        ],
        [
          "onSelect",
          "function",
          "",
          "A callback fired when a menu item is selected. (eventKey: any, event: Object) => any",
        ],
        [
          "onToggle",
          "function",
          "",
          " (open requied) A callback fired when the Dropdown wishes to change visibility. Called with the requested open value. function(Boolean isOpen) {}",
        ],
        [
          "open",
          "boolean",
          "",
          "controlled by: onToggle, initial prop: defaultOpen .Whether or not the Dropdown is visible.",
        ],
        [
          "pullRight",
          "boolean",
          "",
          "Align the menu to the right side of the Dropdown toggle",
        ],
        [
          "role",
          "string",
          "",
          "If 'menuitem', causes the dropdown to behave like a menu item rather than a menu button.",
        ],
        [
          "rootCloseEvent",
          "one of: 'click', 'mousedown'",
          "",
          "Which event when fired outside the component will cause it to be closed",
        ],
        ["title (required)", "node", "", ""],
        [
          "toggleLabel (split type)",
          "string",
          "",
          "Accessible label for the toggle; the value of title if not specified.",
        ],
      ],
    };

    return (
      <div>
        <Helmet title="Dropdown" />
        <h1> Information </h1><br />
        <p> Simple Dropdown in NAB Portal. Use Boostrap default.</p> <br />
        <h1> Sample </h1><br />
        <Col>
          <h4> Text Only</h4>
          <Col md={4}>
            <DropdownComponent items={dataText} bsStyle="link" />

            <div>
              example code:<br />
              <code>
                {"<DropdownComponent items={data_text} bsStyle='link' />"}<br />
              </code>
              <br />
            </div>
          </Col>
          <Col md={4}>
            <DropdownComponent items={dataText} />

            <div>
              example code:<br />
              <code>
                {"<DropdownComponent items={data_text} />"}<br />
              </code>
              <br />
            </div>
          </Col>
          <Col md={4}>
            <DropdownComponent items={dataText2} title="Dropdown divider" />

            <div>
              example code:<br />
              <code>
                {
                  "<DropdownComponent items={data_text2} title='Dropdown divider' />"
                }
                <br />
              </code>
              <br />
            </div>
          </Col>

        </Col>
        <br />
        <br />
        <br />
        <br />
        <Col>
          <h4> Text with Icon </h4>
          <Col md={4}>
            <DropdownComponent
              items={dataIcon}
              bsStyle="link"
              title="Custom"
            />
          </Col>
          <Col md={4}>
            <DropdownComponent items={dataIcon} title="Custom" />
          </Col>
          <Col md={4}>
            <DropdownComponent items={dataIcon2} title="Custom Header" />
          </Col>
        </Col>
        <br />
        <br />
        <br />
        <div>
          example code:<br />
          <code>
            {
              "<DropdownComponent items={data_icon2} title='Dropdown divider' />"
            }
            <br />
          </code>
          <br />

          example data:<br />
          <code>
            {
              "let data_text = [{value : 'Action 1'},{value : 'Action 2'},{value : 'Action 3'},{value : 'Action 4'}];"
            }
            <br />
            <br />
            {
              "let data_text2 = [{value : 'Action 1'},{value : 'Action 2'},{divider : true}, {value : 'Action 3'},{divider : true}, {value : 'Action 4'}];"
            }
            <br />
            <br />
            {
              "let data_icon2 = [{value : 'Action 1', icon : 'volume-off'},{value : 'Action 2', icon : 'question-sign'},{value : 'header', header : true},{value : 'Action 3', icon : 'chevron-left'},{value : 'header', header : true},  {value : 'Action 4', icon : 'info-sign'}];"
            }
            <br />

          </code>

        </div>

        <h1>Props:</h1>
        <PropsTableComponent table_data={tableData} />
      </div>
    );
  }
}


export default withStyles(s)(DropDownSample);
