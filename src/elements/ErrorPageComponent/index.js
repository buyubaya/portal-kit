import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./style.less";


class ErrorPageComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  };
  render() {
    const content = { __html: this.props.content };
    // const classname = classNames("col-md-12", "text-center");
    if (!content) {
      return <div />;
    }
    return (
      <div className="col-md-12 text-center">
        <h1>{this.props.title}</h1>
        <h4 dangerouslySetInnerHTML={content} />
      </div>
    );
  }
}

ErrorPageComponent.defaultProps = {
  title: "Something Error",
};
export default withStyles(s)(ErrorPageComponent);
