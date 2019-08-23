
import React, { Component } from "react";
import Page404 from "../../../pages/Page404";


class ErrorPageSample extends Component {
  render() {
    return (
      <div>
        <h1> Information </h1><br />
        <p> Error Page in NAB Portal. Use Bootrap default.</p> <br />
        <h1> Example </h1>
        <div>
          <p> Error 404 </p>
          <Page404 />
        </div>
      </div>
    );
  }
}

export default ErrorPageSample;
