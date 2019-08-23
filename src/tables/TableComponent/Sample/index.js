export default function createRoutes() {
  return [{
    path: "/sample/table",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const TableSample = require("./sample");
        cb(null, TableSample);
      });
    },
  }];
}
