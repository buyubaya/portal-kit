import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";

import { isomorphicClassNames } from "../../helper/utils";

import AvatarComponent from "../AvatarComponent";

class UserStickComponent extends Component {
  static propTypes = {
    avatar_size: PropTypes.string,
    url: PropTypes.string,
    user_name: PropTypes.string,
    subtext: PropTypes.string,
    avatar: PropTypes.string,
    avatar_type: PropTypes.string,
    className: PropTypes.string,
    user: PropTypes.object,
    onClick: PropTypes.func,
    userLink: PropTypes.string,
    highlightOnHover: PropTypes.bool,
  };
  static defaultProps = {
    highlightOnHover: true,
    avatar_size: "medium",
    user: {},
    onClick: () => { },
    toUserPage: () => { },
  };
  constructor(props) {
    super(props);
    this.state = {
      mouseEnter: false,
    };
  }
  onMouseEnter = () => {
    this.setState({ mouseEnter: true });
  };
  onMouseLeave = () => {
    this.setState({ mouseEnter: false });
  };
  onStickClick = () => {
    console.log("user clicked");
  };


  displayName = () => {
    const notEmpty = str => typeof str === "string" && str.length > 1

    const user = this.props.user;
    const displayName = this.props.user_name;

    if (notEmpty(displayName)) { return displayName };
    if (notEmpty(user.fullName)) { return user.fullName };
    if (notEmpty(user.email)) { return user.email }
    else return "";
  }

  displayAvatar = () => {
    const avatar = this.props.avatar
    const user = this.props.user;

    if (avatar) { return avatar };
    if (user) { return (user.profilePic && user.profilePic.url) };
  }


  render() {
    const classes = [
      s["user-stick"],
      s["free-bootstrap-column"],
      s["pointer-cursor"],
      s["flex-center"],
    ];
    if (this.state.mouseEnter && this.props.highlightOnHover) {
      classes.push(s.filled);
    }
    const classname = isomorphicClassNames(s, classes, this.props.className);
    const userTextClass = isomorphicClassNames(
      s,
      "col-md-9",
      "free-bootstrap-column",
      "user-text",
      this.props.userTextClass,
      {
        with_subtext: !!this.props.subtext,
      },
    );

    const component = (
      <div
        className={classname}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.props.onClick}
        style={{ marginLeft: -5 }}
      >
        <div
          className={`col-md-3 ${s["free-bootstrap-column"]}`}
          style={{ paddingLeft: 5, paddingRight: 5 }}
        >
          <AvatarComponent
            type={this.props.avatar_type || ""}
            size={this.props.avatar_size}
            url={this.displayAvatar()}
          />
        </div>
        <div className={userTextClass}>
          <p>{this.displayName()}</p>
          <p className="text-muted" dangerouslySetInnerHTML={{ __html: this.props.subtext }} />
        </div>
      </div>
    );
    if (this.props.userLink) {
      return (
        <a style={{ textDecoration: "none" }} href={this.props.userLink}>
          {component}
        </a>
      );
    }
    return component;
  }
}

export default withStyles(s)(UserStickComponent);
