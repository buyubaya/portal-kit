import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { Glyphicon, Button } from "react-bootstrap";

import constant from "../../constant";
import s from "./style.less";

const classNames = require("classnames");

class SimpleButtonComponent extends Component {
  static propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    size: PropTypes.oneOf([
      constant.COMPONENT_SIZE.LARGE,
      constant.COMPONENT_SIZE.SMALL,
      constant.COMPONENT_SIZE.EXTRA_SMALL,
    ]),
    enable: PropTypes.bool,
    pill: PropTypes.bool,
    color: PropTypes.oneOf([
      constant.COMPONENT_TYPE.PRIMARY,
      constant.COMPONENT_TYPE.SUCCESS,
      constant.COMPONENT_TYPE.INFO,
      constant.COMPONENT_TYPE.DANGER,
      constant.COMPONENT_TYPE.WARNING,
    ]),
    glyphicon: PropTypes.string,
    children: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.array,
      PropTypes.string,
    ]),
    icon: PropTypes.string,
    is_submit: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf([
      constant.BUTTON_BTN_TYPE.BUTTON,
      constant.BUTTON_BTN_TYPE.RESET,
      constant.BUTTON_BTN_TYPE.SUBMIT,
    ]),
  };
  constructor(props){
    super(props);
    this.state = {
      enable: props.enable || false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      enable: nextProps.enable,
    });
  }
  onClick = () => {
    this.props.onClick();
    if (this.props.is_submit) {
      this.setState({ enable: false });
    }
  }
  render() {
    const {
      glyphicon,
      icon,
      enable,
      pill,
      ...others
    } = this.props;

    const btnClasses = {};
    if (pill) {
      btnClasses[s["btn-pill"]] = true;
    }
    // if(this.props.size === constant.COMPONENT_SIZE.LARGE){
    //   btn_classes['btn-lg'] = true;
    // }
    // if(this.props.size === constant.COMPONENT_SIZE.SMALL){
    //   btn_classes['btn-sm'] = true;
    // }
    // if(this.props.size === constant.COMPONENT_SIZE.EXTRA_SMALL){
    //   btn_classes['btn-xs'] = true;
    // }

    // btn_classes['btn-'+this.props.color] = true;
    // let classname = classNames('btn','btn-default',this.props.className,btn_classes);
    const classname = classNames(this.props.className, btnClasses);

    const iconClassName = [];
    // icon_className.push(this.props.glyphicon);
    // icon_className.push(s["glyphicon-padding"]);

    let iconObject;

    if (glyphicon && typeof glyphicon !== "undefined") {
      iconObject = React.createElement("i", {
        className: iconClassName.join(" "),
      });
    }
    if (icon && typeof icon !== "undefined") {
      iconObject = <Glyphicon glyph={icon} />;
    }
    if (iconObject) {
      return (
        <Button {...others} className={classname}>
          {iconObject}&nbsp;
          {this.props.children}
        </Button>
      );
    }
    return <Button {...others} className={classname} />;
  }
}

SimpleButtonComponent.defaultProps = {
  type: "button",
  enable: true,
  onClick: () => {},
  value: "Button",
};

export default withStyles(s)(SimpleButtonComponent);
