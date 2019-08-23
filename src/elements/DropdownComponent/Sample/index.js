export default function createRoutes() {
  return [{
    path: "/sample/drop-down",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const DropDownSample = require("./sample");
        cb(null, DropDownSample);
      });
    },
  }];
}
