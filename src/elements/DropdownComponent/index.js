import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import {
  DropdownButton,
  MenuItem,
  SplitButton,
  Glyphicon,
} from "react-bootstrap";

import s from "./style.less";

function convertDropdownDataFromItem(item, index) {
  let data;
  if (typeof item === "string") {
    data = {
      value: item,
      active: false,
      key: `id-${index}`,
      eventKey: index,
    };
  } else {
    let { key, ...other } = item;
    const { eventKey } = item;
    if (!key) {
      key = `id-${index}`;
    }
    let itemEventKey = eventKey;

    if (!itemEventKey || typeof itemEventKey === "undefined") {
      itemEventKey = index;
    }

    data = { key, eventKey: itemEventKey, ...other };
  }

  return data;
}

function getDropdownDataFromItems(items = []) {
  const datas = [];
  items.forEach((item, i) => {
    if (!item || typeof item === "undefined") {
      return;
    }
    const data = convertDropdownDataFromItem(item, i);
    if (data) {
      datas.push(data);
    }
  });
  return datas;
}

class DropdownComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    withIcon: PropTypes.bool,
    open: PropTypes.bool,
    onClick: PropTypes.func,
    buttonType: PropTypes.string,
    // id: PropTypes.require,
    // title: PropTypes.require,
  };
  constructor(props){
    super(props);
    const datas = props.items || [];
    this.state = {
      items: getDropdownDataFromItems(datas),
    };
  }
  componentWillReceiveProps(nextProps) {
    const datas = nextProps.items || [];
    this.setState({
      items: getDropdownDataFromItems(datas),
    });
  }
  setActiveDropdownItem = (clickedItem) => {
    const items = this.state.items.map(item => {
      const item1 = item;
      item1.active = false;
      if (clickedItem.key === item1.key) {
        item1.active = true;
      }
      return item1;
    });
    if (clickedItem.onClick && typeof clickedItem.onClick === "function") {
      clickedItem.onClick();
    }
    this.setState({
      items,
    });
  }
  render() {
    // <MenuItem eventKey="1">Action</MenuItem>
    //   <MenuItem eventKey="2">Another action</MenuItem>
    //   <MenuItem eventKey="3" active>Active Item</MenuItem>
    //   <MenuItem divider />
    //   <MenuItem eventKey="4">Separated link</MenuItem>

    const listItem = [];
    // const _this = this;

    this.state.items.forEach(item => {
      const { value, divider, header, icon, ...other } = item;
      if (divider && typeof divider !== "undefined") {
        listItem.push(<MenuItem {...other} divider={divider} />);
      } else {
        listItem.push(
          <MenuItem
            {...other}
            onClick={(item) => this.setActiveDropdownItem(item)}
            className={header ? s["menu-item-header"] : null}
            header={header}
          >
            {icon ? <Glyphicon glyph={icon} /> : null} {value}
          </MenuItem>,
        );
      }
    });

    const { buttonType, ...other } = this.props;

    if (buttonType === "split") {
      return (
        <SplitButton {...other}>
          {listItem}
        </SplitButton>
      );
    }

    return (
      <DropdownButton {...other}>
        {listItem}
      </DropdownButton>
    );
  }
}

DropdownComponent.defaultProps = {
  items: [],
  onClick: () => {},
  dropup: false,
  id: "017",
  title: "Dropdown",
};

export default withStyles(s)(DropdownComponent);
