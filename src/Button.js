import React from "react";
import PropTypes from "prop-types";
import elementType from "react-prop-types/lib/elementType";

const propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  onClick: PropTypes.func,
  componentClass: elementType,
  href: PropTypes.string,
  /**
   * Defines HTML button type attribute
   * @defaultValue 'button'
   */
  type: PropTypes.oneOf(["button", "reset", "submit"]),
};

const defaultProps = {
  active: false,
  block: false,
  disabled: false,
};

class Button extends React.Component {


  render() {
    return (<div> Hello button </div>);
  }
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
