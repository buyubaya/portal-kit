export default function createRoutes() {
  return [{
    path: "/sample/date-time-picker",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const DatePickerSample = require("./sample");
        cb(null, DatePickerSample);
      });
    },
  }];
}
