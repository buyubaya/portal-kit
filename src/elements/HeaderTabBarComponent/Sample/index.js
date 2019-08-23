export default function createRoutes() {
  return [{
    path: "/sample/header-tab-bar",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const HeaderTabSample = require("./sample");
        cb(null, HeaderTabSample);
      });
    },
  }];
}
