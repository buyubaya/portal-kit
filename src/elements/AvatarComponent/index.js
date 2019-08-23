import React, { Component } from "react";
import PropTypes from "prop-types"
import constant from "../../constant";
import SimpleImageComponent from "../SimpleImageComponent";

const classNames = require("classnames");

class Avatar extends Component {
  static propTypes = {
    size: PropTypes.string,
    defaultImage: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    tooltip: PropTypes.string,
    url: PropTypes.string,
  };

  render() {
    const classname = classNames(this.props.className);
    const { url } = this.props;
    let avatarUrl = constant.DEFAULT_AVATAR_URL;
    if (typeof url === "string" && url !== "") {
      avatarUrl = url;
    } else if (typeof url === "object" && url.url) {
      avatarUrl = url.url;
    }

    return (
      <SimpleImageComponent
        onClick={this.props.onClick}
        className={classname}
        style={{ backgroundImage: `url(${avatarUrl})`, backgroundPosition: "center center", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}
        src={null}
        size={this.props.size}
        type={this.props.type}
        tooltip={this.props.tooltip}
      />
    );
  }
}

Avatar.defaultProps = {
  defaultImage: constant.DEFAULT_AVATAR_URL,
  type: "rounded",
  onClick: () => {},
  size: "medium",
};

export default Avatar;
