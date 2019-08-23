import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
// import {NavItem, Nav, NavDropdown, MenuItem, Navbar} from 'react-bootstrap';
import {
  NavItem,
  Nav,
  NavDropdown,
  MenuItem,
  Navbar,
} from "react-bootstrap";

import s from "./style.less";

import NavigationBarHeader from "./NavigationBarHeader";
import NavigationBarForm from "./NavgationBarForm";
import NavigationBarText from "./NavigationBarText";
import NavigationBarPullRight from "./NavigationBarPullRight";

function generateItems(navItems, onItemClickEvent, parentEventKey = "") {
  const items = [];
  navItems.forEach((navItem, i) => {
    // console.log(navItem)
    if (!navItem) {
      return;
    }
    // let {children, eventKey, content, ...other } = navItem;
    const {
      children,
      divider,
      authorized,
      href
    } = navItem;

    let {
      eventKey,
      content,
      onClick,
      ...other
    } = navItem;
    if (!onClick) {
      onClick = onItemClickEvent;
    }

    if (typeof authorized !== "undefined" && authorized === false) {
      return;
    }

    if (divider && parentEventKey !== "") {
      items.push(<MenuItem divider key={i} />);
      return;
    }
    if (!eventKey || typeof eventKey === "undefined") {
      if (parentEventKey !== "") {
        eventKey = `${parentEventKey}.${i}`;
      } else {
        eventKey = i;
      }
    }

    if (!content || typeof content === "undefined") {
      content = "";
    }
    if (children && children.length > 0) {
      // let itemChildren = generateChildrenItems(children, eventKey, onClick);
      const itemChildren = generateItems(children, onClick, eventKey);
      items.push(
        <NavDropdown
          title={content}
          eventKey={eventKey.toString()}
          {...other}
          id={`dropdown-${eventKey}`}
          key={i}
        >
          {itemChildren}
        </NavDropdown>,
      );
    } else {
      items.push(
        <NavItem
          eventKey={eventKey.toString()}
          {...other}
          onClick={onClick ? e => { e.preventDefault(); onClick(navItem); } : null}
          key={i}
          href={href || "#"}
        >
          {content}
        </NavItem>,
      );
    }
  });

  return items;
}

class NavigationBarComponent extends Component {
  static propTypes = {
    bsStyle: PropTypes.oneOf(["default", "inverse"]),
    fluid: PropTypes.bool,
    componentClass: PropTypes.element,
    expanded: PropTypes.bool,
    fixedBottom: PropTypes.bool,
    fixedTop: PropTypes.bool,
    inverse: PropTypes.bool,
    onToggle: PropTypes.func,
    onItemClick: PropTypes.func.isRequired,
    role: PropTypes.string,
    activeKey: PropTypes.string,
    staticTop: PropTypes.bool,
    items: PropTypes.array,
    header: PropTypes.element,
    formElement: PropTypes.element,
    rightElement: PropTypes.element,
    textElement: PropTypes.element,
  };
  constructor(props){
    super(props)
    this.state = {
        activeKey: props.activeKey || 0,
    };
  }
  // getInitialState() {
  //   return {
  //     activeKey: this.props.activeKey || 0,
  //   };
  // }
  onNavBarItemClick = (key) => {
    this.setState({ activeKey: `${key}` });
  }
  render() {
    let {
      header,
      formElement,
      rightElement,
      textElement,
      items, 
      activeKey,
      onItemClick,
      ...other
    } = this.props;
    
    activeKey = this.state.activeKey;
    if (!items || typeof items === "undefined") {
      items = [];
    }
    // console.log(activeKey)
    return (
      <Navbar {...other}>
        <NavigationBarHeader header={header} />
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav activeKey={`${activeKey}`} onSelect={this.onNavBarItemClick}>
            {generateItems(items, onItemClick)}
          </Nav>

          <NavigationBarForm formElement={formElement} />
          <NavigationBarText textElement={textElement} />
          <NavigationBarPullRight rightElement={rightElement} />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withStyles(s)(NavigationBarComponent);
