export default function createRoutes() {
  return [{
    path: "/sample/alert",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const AlertSample = require("./Sample");
        cb(null, AlertSample);
      });
    },
  }];
}


// import { Route, IndexRoute } from 'react-router'
// import AlertSample from './sample'

// export default {
//     path: "/sample/alert",
//     component: AlertSample
// }
