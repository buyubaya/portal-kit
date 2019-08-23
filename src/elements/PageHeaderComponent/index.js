import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import SimpleImageComponent from "../SimpleImageComponent";
import NavigationBarComponent from "../NavigationBarComponent";
import AvatarComponent from "../AvatarComponent";
import constant from "../../constant";
import s from "./style.less";

const classNames = require("classnames");

class PageHeaderComponent extends Component {
  static propTypes = {
    navitems: PropTypes.array,
    logoUrl: PropTypes.string,
    avatarUrl: PropTypes.string,
  };
  onAvatarClick = () => {
  }
  onLogoClick = () => {
  }
  render() {
    const LogoClass = classNames("pull-left", s["navigation-logo"]);
    const AvatarClass = classNames(
      "pull-right",
      s["margin-auto-left"],
      s["navigation-bar-avatar"],
    );
    const classname = classNames("nav nav-tabs", s["flex-center"]);
    const logo = React.createElement(
      "li",
      { role: "presentation", className: LogoClass, onClick: this.onLogoClick },
      <SimpleImageComponent size="medium" url={this.props.logoUrl} />,
    );
    const avatar = React.createElement(
      "li",
      {
        role: "presentation",
        className: AvatarClass,
        onClick: this.onAvatarClick,
      },
      <AvatarComponent size="small" url={this.props.avatarUrl} />,
    );
    const navtab = React.createElement(NavigationBarComponent, {
      className: classname,
      items: this.props.navitems,
      logo,
      avatar,
    });
    return (
      <div className="">
        {navtab}
      </div>
    );
  }
}

PageHeaderComponent.defaultProps = {
  navitems: [],
  logoUrl: constant.DEFAULT_LOGO,
  avatarUrl: constant.DEFAULT_AVATAR_URL,
};

export default withStyles(s)(PageHeaderComponent);
