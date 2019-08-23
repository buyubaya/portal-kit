import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

// import { isomorphicClassNames } from "../../helper/utils";

import ContentHeaderComponent from "../../elements/ContentHeaderComponent";
import SimpleButtonGroupComponent
  from "../../elements/SimpleButtonGroupComponent";

import s from "./SimpleFullPageWithHeaderLayout.less";

class Layout extends Component {
  static propTypes = {
    children: PropTypes.element,
  }

  render() {
    const {
      className,
      headerClassName,
      contentClassName,
      titleClassName,
      title = "Page Title",
      buttons = [],
    } = this.props;
    return (
      <div className={className}>
        <ContentHeaderComponent>
          <div style={{ color: "white" }} className={headerClassName}>
            <h2 className={titleClassName}>{title}</h2>
          </div>
          <SimpleButtonGroupComponent className={s["margin-auto-left"]}>
            {buttons}
          </SimpleButtonGroupComponent>
        </ContentHeaderComponent>
        <div className={contentClassName}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  className: PropTypes.string, // layout styles,
  headerClassName: PropTypes.string, // layout header styles,
  contentClassName: PropTypes.string, // layout content styles,
  titleClassName: PropTypes.string, // header titile styles,
  title: PropTypes.string, // layout title,
  buttons: PropTypes.array, // layout button group,
};

Layout.defaultProps = {};

export default withStyles(s)(Layout);
