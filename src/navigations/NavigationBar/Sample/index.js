export default function createRoutes() {
  return [{
    path: "/sample/navigation-header",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const NavigationHeaderSample = require("./sample");
        cb(null, NavigationHeaderSample);
      });
    },
  }];
}
