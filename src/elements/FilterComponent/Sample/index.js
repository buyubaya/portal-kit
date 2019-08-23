export default function createRoutes() {
  return [{
    path: "/sample/filterComponent",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const filterComponent = require("./filterComponent.sample.js");
        cb(null, filterComponent);
      });
    },
  }];
}
