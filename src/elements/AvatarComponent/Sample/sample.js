import React, { Component } from "react";
import Helmet from "react-helmet";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import Avatar from "../index";

import PropsTableComponent from "../../../../samples/PropsTableComponent";

import s from "./sample.less";

class AvatarSample extends Component {
  render() {
    const tableData = {
      rows: [
        [
          "type",
          "one of : 'circle', 'rounded', 'thumbnail'",
          "'rounded'",
          "Avatar type",
        ],
        [
          "size",
          "one of: 'large', 'medium', 'small'",
          "'medium'",
          "Avatar size",
        ],
        ["className", "string", "undefined", "Custom class"],
        ["onClick", "function", "", "Handle click on avatar"],
      ],
    };

    return (
      <div>
        <Helmet title="Avatar" />
        <h1> Information </h1><br />
        <p> Avatar in NAB Portal. Use Bootrap default.</p> <br />
        <h1> Sample </h1><br />
        <h4> Thumbnail </h4>
        <Avatar className={s["custom-img"]} size="small" />
        <Avatar className={s["custom-img"]} size="medium" />
        <Avatar className={s["custom-img"]} size="large" />

        <div>
          example code:<br />
          <code>
            {"<Avatar className={'custom-img'} size='large'/>"}<br />
          </code>
          <br />
        </div>

        <h4> Rounded </h4>
        <Avatar className={s["custom-img"]} type="rounded" size="small" />
        <Avatar className={s["custom-img"]} type="rounded" size="medium" />
        <Avatar className={s["custom-img"]} type="rounded" size="large" />

        <div>
          example code:<br />
          <code>
            {"<Avatar className={'custom-img'} type='rounded' size='large'/>"}
            <br />
          </code>
          <br />
        </div>
        <h4> Circle </h4>
        <Avatar className={s["custom-img"]} type="circle" size="small" />
        <Avatar className={s["custom-img"]} type="circle" size="medium" />
        <Avatar className={s["custom-img"]} type="circle" size="large" />

        <div>
          example code:<br />
          <code>
            {"<Avatar className={'custom-img'} type = 'circle' size='large'/>"}
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

export default withStyles(s)(AvatarSample);
