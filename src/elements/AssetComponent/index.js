import React, { Component } from "react";
import PropTypes from "prop-types"
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { Glyphicon } from "react-bootstrap";

import ThumbnailComponent from "../../elements/ThumbnailComponent";
import SimpleImageComponent from "../../elements/SimpleImageComponent";
import s from "./style.less";
import { isomorphicClassNames } from "../../helper/utils";

const classNames = require("classnames");

class AssetDetail extends Component {
  static propTypes = {
    className: PropTypes.string,
    imageClassName: PropTypes.string,
    titleClassName: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    selected: PropTypes.bool,
    disabled: PropTypes.bool,
    allowSelect: PropTypes.bool,
    children: PropTypes.element,
    footer: PropTypes.element,
    onClick: PropTypes.func,
    onImageClick: PropTypes.func,
    onTitleClick: PropTypes.func,
  }
  render() {
    const classname = isomorphicClassNames(
      s,
      {
        "asset-item": true,
        "asset-selected": this.props.selected,
      },
      this.props.className,
    );

    const titleClassName = classNames(s.title, this.props.titleClassName);

    const imageClassName = classNames(
      s["image-view-cover"],
      s["pointer-cursor"],
      this.props.imageClassName,
    );

    const children = this.props.children;
    const footer = this.props.footer;

    const allowSelect = this.props.allowSelect || null;
    const selected = this.props.selected || null;
    const disabled = this.props.disabled || null;
    const showSelect = allowSelect && !selected && !disabled;
    const showDisabled = allowSelect && !selected && disabled;
    return (
      <div className={classname} onClick={this.props.onClick}>
        <div className={s.body}>

          <ThumbnailComponent
            className={imageClassName}
            onClick={this.props.onImageClick}
          >
            <SimpleImageComponent url={this.props.url} />
          </ThumbnailComponent>

          <div className={titleClassName} onClick={this.props.onTitleClick}>
            <strong> {this.props.title} </strong>
          </div>

          {children || null}

        </div>
        {footer
          ? <div className={s.footer}>
            {footer}
          </div>
          : null}

        {allowSelect
          ? <div className={s["add-asset-status"]}>
            {showSelect ? <span className={s["asset-select-icon"]} /> : null}
            {selected
                ? <Glyphicon glyph={"ok"} className={s["asset-checked-icon"]} />
                : null}
            {showDisabled
                ? <Glyphicon
                  glyph={"warning-sign"}
                  className={s["asset-disabled-icon"]}
                />
                : null}
          </div>
          : null}
      </div>
    );
  }
}

AssetDetail.defaultProps = {
  title: "Asset item",
  onClick: () => {},
  selected: false,
  onImageClick: () => {},
  onTitleClick: () => {},
};

export default withStyles(s)(AssetDetail);
