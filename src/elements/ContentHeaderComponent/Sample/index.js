export default function createRoutes() {
  return [{
    path: "/sample/content-header",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const HeaderSample = require("./sample");
        cb(null, HeaderSample);
      });
    },
  }];
}
