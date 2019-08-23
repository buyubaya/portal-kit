export default function createRoutes() {
  return [{
    path: "/sample/daterangepicker",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const DateRangePickerComponent = require("./daterangepicker.sample.js");
        cb(null, DateRangePickerComponent);
      });
    },
  }];
}
