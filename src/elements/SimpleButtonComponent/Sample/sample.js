import Helmet from "react-helmet";
import React, { Component } from "react";

import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Glyphicon } from "react-bootstrap";

import SimpleButtonComponent from "../index";

import constant from "../../../constant";

import s from "./sample.less";
import PropsTableComponent from "../../../../samples/PropsTableComponent";

class ButtonSample extends Component {
  render() {
    const tableData = {
      // header: [ "Name","Type","Default","Description"],
      rows: [
        [
          "type",
          "one of: 'button', 'reset', 'submit'",
          "'info'",
          "Button Type",
        ],
        [
          "bsSize",
          "one of: 'lg', 'large', 'sm, 'small', 'xs', 'xsmall'",
          " ",
          "Component size variations",
        ],
        [
          "bsStyle",
          "one of: 'success', 'warning', 'danger', 'info', 'default', 'primary', 'link'",
          "'default'",
          "Component visual or contextual style variants.",
        ],
        ["disabled", "boolean", "", "false"],
        ["pill", "boolean", "false", "Button Pill style"],
        ["href", "string", "", ""],
        ["onClick", "function", "", ""],
        ["active", "boolean", "false", ""],
        ["block", "boolean", "false", ""],
        ["className", "string", "undefined", "custom class"],
      ],
    };
    return (
      <div>
        <Helmet title="Button" />
        <h1> Information </h1><br />
        <p> Simple Button in NAB Portal. Use Boostrap default.</p> <br />
        <h1> Component </h1><br />
        <h4> Button Options :</h4>
        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent>Default</SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.PRIMARY}>
            Primary
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.SUCCESS}>
            Success
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.INFO}>
            Info
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.WARNING}>
            Warning
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.DANGER}>
            Danger
          </SimpleButtonComponent>
        </div>
        example code:<br />
        <code>
          {"<SimpleButtonComponent>Default</SimpleButtonComponent>"}<br />
          {
            "<SimpleButtonComponent bsStyle={primary}> Primary </SimpleButtonComponent>"
          }
          <br />
          {
            "<SimpleButtonComponent bsStyle={success}> Success </SimpleButtonComponent>"
          }
          <br />
          {
            "<SimpleButtonComponent bsStyle={info}> Info </SimpleButtonComponent>"
          }
          <br />
          {
            "<SimpleButtonComponent bsStyle={warning}> Warning </SimpleButtonComponent>"
          }
          <br />
          {
            "<SimpleButtonComponent bsStyle={danger}> Danger </SimpleButtonComponent>"
          }
          <br />
        </code>
        <br />
        <h4> Button Sizes :</h4>
        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent bsSize={constant.COMPONENT_SIZE.LARGE}>
            Default LARGE
          </SimpleButtonComponent>
          <SimpleButtonComponent
            bsStyle={constant.COMPONENT_TYPE.PRIMARY}
            bsSize={constant.COMPONENT_SIZE.LARGE}
          >
            Primary LARGE
          </SimpleButtonComponent>
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<SimpleButtonComponent bsSize={\"large\"}> Default LARGE </SimpleButtonComponent>"
            }
            <br />
            {
              "<SimpleButtonComponent bsStyle={\"primary\"} bsSize={\"large\"}> Primary LARGE </SimpleButtonComponent>"
            }
            <br />
          </code>
          <br />
        </div>

        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent bsSize={constant.COMPONENT_SIZE.SMALL}>
            Default SMALL
          </SimpleButtonComponent>
          <SimpleButtonComponent
            bsStyle={constant.COMPONENT_TYPE.PRIMARY}
            bsSize={constant.COMPONENT_SIZE.SMALL}
          >
            Primary SMALL
          </SimpleButtonComponent>
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<SimpleButtonComponent bsSize={\"small\"}> Default SMALL </SimpleButtonComponent>"
            }
            <br />
            {
              "<SimpleButtonComponent bsStyle={\"primary\"} bsSize={\"small\"}> Primary SMALL </SimpleButtonComponent>"
            }
            <br />
          </code>
          <br />
        </div>

        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent bsSize={constant.COMPONENT_SIZE.EXTRA_SMALL}>
            Default EXTRA SMALL
          </SimpleButtonComponent>
          <SimpleButtonComponent
            bsStyle={constant.COMPONENT_TYPE.PRIMARY}
            bsSize={constant.COMPONENT_SIZE.EXTRA_SMALL}
          >
            Primary EXTRA SMALL
          </SimpleButtonComponent>
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<SimpleButtonComponent bsSize={\"extra_small\"}> Default EXTRA SMALL </SimpleButtonComponent>"
            }
            <br />
            {
              "<SimpleButtonComponent bsStyle={\"primary\"} bsSize={constant.COMPONENT_SIZE.EXTRA_SMALL}> Primary EXTRA SMALL </SimpleButtonComponent>"
            }
            <br />
          </code>
          <br />
        </div>

        <h4> Button Disabled State : </h4>
        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent
            bsSize={constant.COMPONENT_SIZE.LARGE}
            disabled
          >
            Default DISABLE
          </SimpleButtonComponent>
          <SimpleButtonComponent
            bsStyle={constant.COMPONENT_TYPE.PRIMARY}
            bsSize={constant.COMPONENT_SIZE.LARGE}
            disabled
          >
            Primary DISABLE
          </SimpleButtonComponent>
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<SimpleButtonComponent bsSize={\"large\"} disabled> Default DISABLE </SimpleButtonComponent>"
            }
            <br />
            {
              "<SimpleButtonComponent bsStyle={\"primary\"} bsSize={\"large\"} disabled> Primary DISABLE </SimpleButtonComponent>"
            }
            <br />
          </code>
          <br />
        </div>
        <h4> Pill Button :</h4>
        <p>
          Pill Button in NAB portal. This is NAB portal customised button.
        </p>

        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent
            bsStyle={constant.COMPONENT_TYPE.PRIMARY}
            bsSize={constant.COMPONENT_SIZE.SMALL}
            pill
          >
            Primary Pill
          </SimpleButtonComponent>
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<SimpleButtonComponent bsStyle={\"primary\"} bsSize={\"small\"} pill> Primary Pill </SimpleButtonComponent>"
            }
            <br />
          </code>
          <br />
        </div>
        <h4> Button with Glyphicon :</h4>
        <p>
          {" "}
          Button with glyphicon in NAB portal. This is NAB portal customised button.
        </p>
        <p>
          {" "}
          more detail about Glyphicon component : https://react-bootstrap.github.io/components.html#glyphicons
        </p>
        <div className={s["honrizontal-align"]}>
          <SimpleButtonComponent pill>
            <Glyphicon glyph={"ok"} /> Default
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.PRIMARY} pill>
            <Glyphicon glyph={"repeat"} /> Primary
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.SUCCESS} pill>
            <Glyphicon glyph={"ok"} /> Success
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.INFO} pill>
            <Glyphicon glyph={"music"} /> Info
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.WARNING} pill>
            <Glyphicon glyph={"pencil"} /> Warning
          </SimpleButtonComponent>
          <SimpleButtonComponent bsStyle={constant.COMPONENT_TYPE.DANGER} pill>
            <Glyphicon glyph={"map-marker"} /> Danger
          </SimpleButtonComponent>
        </div>
        <div>
          example code:<br />
          <code>
            {
              "<SimpleButtonComponent bsStyle={\"primary\"} pill> <Glyphicon glyph={\"repeat\"} /> Primary </SimpleButtonComponent>"
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

export default withStyles(s)(ButtonSample);
