/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from "react";
import PropTypes from "prop-types";
// import cx from "classnames";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import SimpleImageComponent from "../../elements/SimpleImageComponent";

import s from "./style.less";
// import constant from "../../constant";

class PageNavigation extends Component {
  static propTypes = {
    children: PropTypes.element,
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element,
  }
  render() {
    const { children, leftComponent, rightComponent } = this.props;
    return (
      <div className={`row ${s.header}`}>
        <ul className={`nav nav-tabs ${s["flex-center"]}`}>
          {leftComponent
            ? <li role="presentation" className={leftComponent.className}>
              <SimpleImageComponent className={s["logo-img"]} />
              {leftComponent}
            </li>
            : null}
          {children}
          {rightComponent
            ? <li
              role="presentation"
              className={
                  `${s[
                    "margin-auto-left"
                  ]} pull-right ${rightComponent.className}`
                }
            >
              {rightComponent}
            </li>
            : null}
        </ul>
      </div>
    );
  }
}

export default withStyles(s)(PageNavigation);
