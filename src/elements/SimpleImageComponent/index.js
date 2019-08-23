import React, { Component } from "react";
import PropTypes from "prop-types"
import withStyles from "isomorphic-style-loader/lib/withStyles";

import { OverlayTrigger, Tooltip } from "react-bootstrap";

import constant from "../../constant";
import s from "./style.less";

const classNames = require("classnames");

class SimpleImageComponent extends Component {
  static propTypes = {
    url: PropTypes.string,
    className: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.oneOf([
      constant.COMPONENT_IMAGE_TYPE.CIRCLE,
      constant.COMPONENT_IMAGE_TYPE.ROUNDED,
      constant.COMPONENT_IMAGE_TYPE.THUMBNAIL,
      "",
    ]),
    size: PropTypes.oneOf([
      constant.COMPONENT_SIZE.LARGE,
      constant.COMPONENT_SIZE.MEDIUM,
      constant.COMPONENT_SIZE.SMALL,
    ]),
    onClick: PropTypes.func,
    loadingImgUrl: PropTypes.string,
    alt: PropTypes.string,
    tooltip: PropTypes.object,
  };
  constructor(props){
    super(props)

    this.state = {
      isLoading: false
    }
  }

  renderImgUrl = "";

  render = () => {
    let classes = {};
    if (this.props.type) {
        classes[`img-${this.props.type}`] = true;
    }
    classes[s[`image_${this.props.size}`]] = true;

    let {
      tooltip,
      alt,
      url,
      type,
      size,
      loadingImgUrl,
      className,
      ...other
    } = this.props;

    className = classNames(classes, className );
    // let imgDataUri =
    let imgSrc = this.props.url;
    if (this.state.isLoading) {
      imgSrc = this.props.loadingImgUrl;
    } else {
      imgSrc = this.props.url;
    }

    // console.log("imgSrc ", imgSrc);
    if (!tooltip) {
      return (
        <img
          src={imgSrc}
          className={className}
          onClick={this.props.onClick}
          alt={alt}
          {...other}
        />
      );
    }
    const tooltipOverlay = (
      <Tooltip
        className={tooltip.className ? tooltip.className : ""}
        id="tooltip"
      >
        {tooltip.title}
      </Tooltip>
    );
    return (
      <OverlayTrigger placement={tooltip.position} overlay={tooltipOverlay}>
        <img
          src={imgSrc}
          className={className}
          onClick={this.props.onClick}
          alt={alt}
          {...other}
        />
      </OverlayTrigger>
    );
  }
}

SimpleImageComponent.defaultProps = {
  url: constant.DEFAULT_IMAGE_URL,
  loadingImgUrl: constant.DEFAULT_LOADING_IMAGE_URL,
  className: "",
  title: "",
  alt: "",
  onClick: () => {},
  // type:constant.COMPONENT_IMAGE_TYPE.ROUNDED,
  // size:constant.COMPONENT_SIZE.MEDIUM
};

export default withStyles(s)(SimpleImageComponent);
