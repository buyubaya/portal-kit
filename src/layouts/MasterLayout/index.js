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
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./MasterLayout.less";
// import Header from '../Header';
// import Feedback from '../Feedback';
// import Footer from '../Footer';

class MasterLayout extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    className: PropTypes.string,
    header: PropTypes.element,
    footer: PropTypes.element,
  };
  render() {
    const { children, header, footer, className } = this.props;
    return (
      <div className={className}>
        {header}
        {React.Children.only(children)}
        {footer}
      </div>
    );
  }
}

export default withStyles(s)(MasterLayout);
