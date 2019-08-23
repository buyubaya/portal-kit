export default function createRoutes() {
  return [{
    path: "/sample/navigation-bar",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const NavigationBarSample = require("./Sample");
        cb(null, NavigationBarSample);
      });
    },
  }];
}
