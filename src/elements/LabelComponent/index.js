import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Label, Glyphicon } from "react-bootstrap";

// import { multipleClassName } from "../../helper/utils";
import s from "./style.less";

import constant from "../../constant";

class LabelComponent extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    bsStyle: PropTypes.oneOf([
      constant.COMPONENT_TYPE.PRIMARY,
      constant.COMPONENT_TYPE.SUCCESS,
      constant.COMPONENT_TYPE.INFO,
      constant.COMPONENT_TYPE.DANGER,
      constant.COMPONENT_TYPE.WARNING,
    ]),
    onClick: PropTypes.func,
    icon: PropTypes.string,
    crossButton: PropTypes.bool,
  };
  render() {
    // let label_classes = {};
    // label_classes['label-'+this.props.type ] = true;

    // var classname = classNames('label','label-default',this.props.className,label_classes )

    const {
      onClick = () => {},
      icon,
      crossButton,
      ...other
    } = this.props;
    // return (
    //   <span className={classname} onClick={this.props.onClick}>
    //   {this.props.value}
    //   </span>
    // )
    // const closeButtonClass = multipleClassName(
    //   s["pointer-cursor"],
    //   s["remove-button"],
    // );
    return (
      <Label onClick={onClick} {...other}>
        {icon ? <Glyphicon glyph={icon} /> : null}
        &nbsp;
        {this.props.value}
        &nbsp;
        {crossButton ? <Glyphicon glyph={"remove"} /> : null}
      </Label>
    );
  }
}

LabelComponent.defaultProps = {
  value: "Label",
  onClick: () => {},
};

export default withStyles(s)(LabelComponent);
