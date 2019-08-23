import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Glyphicon } from "react-bootstrap";

import s from "./AssetPicker.less";
import style from "../../resources/style.less";

class LabelMentionComponent extends Component {
  static propTypes = {
    entityKey: PropTypes.string,
    mention: PropTypes.object,
  };

  render() {
    const { mention } = this.props;
    // console.log(mention)
    return (
      <span
        key={mention.get("key")}
        className={`${style["flex-inline-center"]} ${s["user-mention-component"]}`}
      >
        <Glyphicon glyph={"tag"} />
        <span className={s.content}>
          {this.props.children}
        </span>
      </span>
    );
  }
}

export default withStyles(s, style)(LabelMentionComponent);
