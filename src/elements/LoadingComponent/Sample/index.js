export default function createRoutes() {
  return [{
    path: "/sample/loading",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const LoadingSample = require("./sample");
        cb(null, LoadingSample);
      });
    },
  }];
}
