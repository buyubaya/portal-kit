import Helmet from "react-helmet";
import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";

import HeaderTabBarComponent from "../index";

const items = [
  { active: true, value: "item 1" },
  { active: false, value: "item 2" },
  { active: false, value: "item 3" },
  { active: false, value: "item 4" },
  { active: false, value: "item 5" },
];
class HeaderTabSample extends Component {
  constructor(props){
    super(props);
    this.state = {
      activePos: 0 
    };
  }
  onItemClick(index) {
    if (index !== this.state.activePos) {
      items[index].active = true;
      items[this.state.activePos].active = false;
      this.setState({ activePos: index });
    }
  }
  render() {
    return (
      <div>
        <Helmet title="Tab Header" />
        <h1> Information </h1><br />
        <p> HeaderTabBarComponent in NAB Portal. Use Boostrap default.</p>
        {" "}
        <br />
        <h1> Sample </h1><br />
        <h4> Header Tab bar</h4>
        <HeaderTabBarComponent
          items={items}
          onTabItemClick={this.onItemClick}
        />
      </div>
    );
  }
}

export default withStyles()(HeaderTabSample);
