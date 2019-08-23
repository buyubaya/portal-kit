import React, {PropTypes} from 'react';

import bt from 'bootstrap/dist/css/bootstrap.css?root=./node_modules/bootstrap/dist/'; // eslint-disable-line import/no-unresolved, max-len

const ContextType = {

  insertCss: PropTypes.func.isRequired,

};
class ContextProvider extends React.Component {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  };

  static childContextTypes = ContextType;

  getChildContext() {
    return this.props.context;
  }
  
  //---- bootstrap config ---- 
  componentWillMount() {
    const { insertCss } = this.props.context;
    this.removeCss = insertCss();
    this.removeBootstrap = insertCss(bt);
  }
  componentWillUnmount() {
    this.removeCss();
    this.removeBootstrap();
  }
  //---- end bootstrap config ----

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(this.props.children);
  }

}

export default ContextProvider;
