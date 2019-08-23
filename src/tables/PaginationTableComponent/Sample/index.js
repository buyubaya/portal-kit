export default function createRoutes() {
  return [{
    path: "/sample/pagination-table",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const PaginationTableSample = require("./sample");
        cb(null, PaginationTableSample);
      });
    },
  }];
}
