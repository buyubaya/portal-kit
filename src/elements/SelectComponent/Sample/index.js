export default function createRoutes() {
  return [{
    path: "/sample/select",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const SelectSample = require("./sample");
        cb(null, SelectSample);
      });
    },
  }];
}
