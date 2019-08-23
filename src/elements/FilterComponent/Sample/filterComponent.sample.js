import React, { Component } from "react";
import Helmet from "react-helmet";

import TextBoxComponent from "../../TextBoxComponent/";
import FilterComponent from "../FilterComponent";

class DateRangePickerSample extends Component {
  getFilterItems = () => {
    const filterItems = [];

    filterItems.push({
      name: "Search",
      component(state, ctx) {
        return (
          <TextBoxComponent
            placeholder="Enter keywords..."
            value={state.keywords}
            onChange={text => {
              ctx.setFilter({ keywords: text });
            }}
          />
        );
      },
    });

    return filterItems;
  };

  render() {
    return (
      <div>
        <Helmet title="Filter Component" />
        <h1>Filter Component</h1>
        <hr />
        <FilterComponent onApplyFilter={() => {}} filterItems={this.getFilterItems()} />
      </div>
    );
  }
}

export default DateRangePickerSample;
