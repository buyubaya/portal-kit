import React, { Component } from "react";
import PropTypes from "prop-types";

import withStyles from "isomorphic-style-loader/lib/withStyles";

import ErrorPageSample from "../elements/ErrorPageComponent/Sample/sample";

import AlertSample from "../elements/AlertComponent/Sample/sample";
import AvatarSample from "../elements/AvatarComponent/Sample/sample";
import DateTimeSample from "../elements/DateTimeComponent/Sample/sample";
import DropDownSample from "../elements/DropdownComponent/Sample/sample";
import CheckBoxSample from "../elements/SimpleCheckBoxComponent/Sample/sample";
import LabelSample from "../elements/LabelComponent/Sample/sample";
import NavigationHeaderSample from "../navigations/NavigationBar/Sample/sample";
// import PanelSample from "../elements/PanelComponent/Sample/sample";
import ButtonSample from "../elements/SimpleButtonComponent/Sample/sample";
import UserStickSample from "../elements/UserStickComponent/Sample/sample";
import TextAreaSample from "../elements/TextAreaComponent/Sample/sample";
import TextBoxSample from "../elements/TextBoxComponent/Sample/sample";
import TableSample from "../tables/TableComponent/Sample/sample";
// import TabSample from "../elements/TabComponent/Sample/sample";
import HeaderSample from "../elements/ContentHeaderComponent/Sample/sample";
import DateRangePicker from "../elements/DateRangePicker/Sample/daterangepicker.sample";
import FilterComponent from "../elements/FilterComponent//Sample/filterComponent.sample";

import HeaderTabSample from "../elements/HeaderTabBarComponent/Sample/sample";
// import ListGroupSample from "../elements/ListGroupComponent/Sample/sample";
import LoadingSample from "../elements/LoadingComponent/Sample/sample";
// import TabListSample from "../elements/TabListComponent/Sample/sample";
import PageHeader from "../elements/PageHeaderComponent/Sample/sample";
import DatePickerSample from "../elements/DateTimePickerComponent/Sample/sample";
import SelectSample from "../elements/SelectComponent/Sample/sample";

import PaginationTableSample from "../tables/PaginationTableComponent/Sample/sample";
import Page403Sample from "../pages/Page403/Sample/sample";
import Page404Sample from "../pages/Page404/Sample/sample";

import SideBarSample from "../sidebar/SideBarComponent/Sample/sample";

const internalLinks = [
  { link: "error-page", component: ErrorPageSample },
  { link: "text-box", component: TextBoxSample },
  { link: "text-area", component: TextAreaSample },
  { link: "check-box", component: CheckBoxSample },
  { link: "drop-down", component: DropDownSample },
  { link: "alert", component: AlertSample },
  { link: "date-picker", component: DateTimeSample },
  { link: "button", component: ButtonSample },
  // { link: "tab-component", component: TabSample },
  { link: "avatar", component: AvatarSample },
  { link: "user-stick", component: UserStickSample },
  { link: "tables", component: TableSample },
  { link: "pagination-tbls", component: PaginationTableSample },
  // { link: "panel-action", component: PanelSample },
  { link: "navigation-header", component: NavigationHeaderSample },
  { link: "label", component: LabelSample },
  { link: "content-header", component: HeaderSample },
  { link: "error-403-page", component: Page403Sample },
  { link: "error-404-page", component: Page404Sample },
  { link: "header-tab-bar", component: HeaderTabSample },
  { link: "daterangepicker", component: DateRangePicker },
  { link: "filterComponent", component: FilterComponent },
  // { link: "list-group", component: ListGroupSample },
  { link: "loading", component: LoadingSample },
  // { link: "tab-list", component: TabListSample },
  { link: "page-header", component: PageHeader },
  { link: "date-time-picker", component: DatePickerSample },
  { link: "select", component: SelectSample },
  { link: "side-bar", component: SideBarSample },
];

class HomeComponent extends Component {
  static propTypes = {
    page: PropTypes.any,
  };

  render() {
    const page = this.props.page;
    return (
      <div>
        {internalLinks.map((item, index) => {
          if (page.indexOf(item.link) !== -1) {
            return <item.component key={index} />;
          }
          return null;
        })}
      </div>
    );
  }
}

export default withStyles()(HomeComponent);
