// polyfill webpack require.ensure
if (typeof require.ensure !== "function") require.ensure = (d, c) => c(require);

import React from "react";
import { browserHistory } from "react-router";

import MasterLayout from "../src/layouts/MasterLayout";
import HomePage from "../src/home";


export default function createRoutes() {
  const root = {
    path: "/",
    component: MasterLayout,
    getChildRoutes(location, cb) {
      require.ensure([], require => {
        const childrenRoutes = [];
        const routes = [
          require("../src/elements/AlertComponent/Sample")(),
          require("../src/elements/AvatarComponent/Sample")(),
          require("../src/elements/ContentHeaderComponent/Sample")(),
          require("../src/elements/DateTimePickerComponent/Sample")() /* outlet */,
          require("../src/elements/DropdownComponent/Sample")(),
          require("../src/elements/SimpleCheckBoxComponent/Sample")(),
          require("../src/elements/HeaderTabBarComponent/Sample")() /* outlet */,
          require("../src/elements/LabelComponent/Sample")(),
          // require('../src/elements/ListGroupComponent/Sample')(),     /* outlet */
          require("../src/elements/NavigationBarComponent/Sample")() /*  not used    /sample/navigation-bar  */,
          require("../src/elements/PageHeaderComponent/Sample")() /* outlet */,
          // require('../src/elements/PanelComponent/Sample')(),
          require("../src/elements/SimpleButtonComponent/Sample")(),
          // require('../src/elements/TabListComponent/Sample')(),       /* outlet */
          require("../src/elements/UserStickComponent/Sample")(),
          require("../src/elements/TextAreaComponent/Sample")(),
          require("../src/elements/TextBoxComponent/Sample")(),
          require("../src/elements/LoadingComponent/Sample")() /* outlet */,
          require("../src/navigations/NavigationBar/Sample")(),
          // require('../src/tables/TableComponent/Sample')(),
          // require('../src/elements/TabComponent/Sample')(),
          require("../src/elements/DateTimeComponent/Sample")(),
          require("../src/elements/SelectComponent/Sample")(),
          require("../src/elements/DateRangePicker/Sample")(),
          require("../src/tables/PaginationTableComponent/Sample")(),
        ];
        routes.forEach((route) => {
          // console.log(route, typeof route);
          if (Object.prototype.toString.call(route) === "[object Array]") {
            route.forEach((r) => {
              childrenRoutes.push(r);
            });
          } else childrenRoutes.push(route);
        });

        cb(null, childrenRoutes);
      });
    },

    indexRoute: {
      component: HomePage,
    },
  };
  return root;
}

// import React from 'react'
// import { Router, Route, IndexRoute } from 'react-router';
// import browserHistory from 'react-router/lib/browserHistory';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

// var MasterLayout = require('../src/layouts/MasterLayout');

// var indexRouteComponent = React.createClass({
//     render: () => {
//         return <div key="123"></div>;
//     }
// })

// var routeContainer = React.createClass({
//     render: () => {
//         return <div key="route-container"></div>;
//     }
// })

// import AlertSampleRoute from '../src/elements/AlertComponent/Sample';

// var testComponent = React.createClass({
//     render: function () {
//         console.log("hhah")
//         return <div >Testttttt</div>;
//     }
// })
// var routes = (
//     <MasterLayout>
//         <Router  history={browserHistory} key={Math.random()}>
//             <Route path="/" component={indexRouteComponent} />
//             <Route path={AlertSampleRoute.path} component={AlertSampleRoute.component} />
//             <Route path='/test' component={testComponent} />
//         </Router>
//     </MasterLayout>
// )

// export default routes
