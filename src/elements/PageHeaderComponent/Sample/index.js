export default function createRoutes() {
  return [{
    path: "/sample/page-header",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const PageHeaderSample = require("./Sample");
        cb(null, PageHeaderSample);
      });
    },
  }];
}
