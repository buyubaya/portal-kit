import React, { Component } from "react";

import withStyles from "isomorphic-style-loader/lib/withStyles";
import HomeComponent from "./home";

import s from "./style.less";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: window.location.href,
    };
  }

  onItemClick = (el) => {
    this.setState({ page: el.target.href });
  }
  render() {
    return (
      <div>
        <h1 className={s.header}>PORTAL UI KIT</h1>
        <main className={s.main}>
          <div className={s["document-slidebar"]}>
            { /* OVERVIEW */}
            <h5 className={s["title-slidebar"]}>OVERVIEW</h5>
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> NAB Portal Style Guide </a><br />

            { /* VISUAL LANGUAGE */}
            <h5 className={s["title-slidebar"]}>VISUAL LANGUAGE</h5>
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Typography </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Colors </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Icons </a><br />
            <a href="#/sample/error-403-page" onClick={this.onItemClick}> Error 403 Pages </a><br />
            <a href="#/sample/error-404-page" onClick={this.onItemClick}> Error 404 Pages </a><br />

            {/* UI COMPONENTS */}
            <h5 className={s["title-slidebar"]}>UI COMPONENTS</h5>
            <a href="#/sample/text-box" onClick={this.onItemClick}> TextBox </a><br />
            <a href="#/sample/text-area" onClick={this.onItemClick}> TextArea </a><br />
            <a href="#/sample/select" onClick={this.onItemClick}> Selects </a><br />
            <a href="#/sample/check-box" onClick={this.onItemClick}> Checkboxes </a><br />
            <a href="#/sample/drop-down" onClick={this.onItemClick}> Dropdowns </a><br />
            <a href="#/sample/alert" onClick={this.onItemClick}> Alerts </a><br />
            <a href="#/sample/date-picker" onClick={this.onItemClick}> Date Time </a><br />
            <a href="#/sample/button" onClick={this.onItemClick}> Buttons </a><br />
            <a href="#/sample/tab-component" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Tabs </a><br />
            <a href="#/sample/avatar" onClick={this.onItemClick}> Avatars </a><br />
            <a href="#/sample/user-stick" onClick={this.onItemClick}> User Sticker Component </a><br />
            <a href="#/sample/pagination-tbls" onClick={this.onItemClick}> Pagination Tables </a><br />
            <a href="#/sample/panel-action" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Panels </a><br />
            <a href="#/sample/side-bar" onClick={this.onItemClick}> Slidebar </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Activiy Cells </a><br />
            <a href="#/sample/navigation-header" onClick={this.onItemClick}> Navigation Bar </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Asset Thumbnails </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Search Box </a><br />
            <a href="#/sample/label" onClick={this.onItemClick}> Labels</a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Object Cells </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Paging Item </a><br />
            <a href="#/sample/content-header" onClick={this.onItemClick}> Header </a><br />
            <a href="#/sample/daterangepicker" onClick={this.onItemClick}> DateRange Picker </a><br />
            <a href="#/sample/filterComponent" onClick={this.onItemClick}> Filter Component </a><br />

            {/* VG MODULES */}
            <h5 className={s["title-slidebar"]}>VG MODULES</h5>
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Add Asset Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Assign Tester Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Upload Asset Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Create New Template Module </a><br />

            {/* VG MODULES */}
            <h5 className={s["title-slidebar"]}>MZ MODULES</h5>
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Artwork Picker Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Assorted Picker Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Import Artworks Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Localization Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Store Item Layout Module </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Artwork Items </a><br />

            <h5 className={s["title-slidebar"]}>FOR DEVELOPER</h5>
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Bootstrap Components </a><br />
            <a href="#" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Custom Components </a><br />

            <h5 className={s["title-slidebar"]}>NAB STUDIO OUTLET COMPONENTS</h5>
            <a href="#/sample/list-group" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> List Group </a><br />
            <a href="#/sample/loading" onClick={this.onItemClick}> Loading Components </a><br />
            <a href="#/sample/header-tab-bar" onClick={this.onItemClick}> Tab </a><br />
            <a href="#/sample/tab-list" onClick={this.onItemClick} style={{ textDecoration: "line-through" }}> Tab List </a><br />
            <a href="#/sample/date-time-picker" onClick={this.onItemClick}> Date Time Picker </a><br />
            <a href="#/sample/page-header" onClick={this.onItemClick}> Old Navigation Header</a><br />
          </div>
          <div className={s["main-page"]}>
            <HomeComponent page={this.state.page} />
          </div>
        </main>
      </div>
    );
  }
}

export default withStyles(s)(HomePage);
