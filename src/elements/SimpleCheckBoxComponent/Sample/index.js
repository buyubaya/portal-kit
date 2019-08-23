export default function createRoutes() {
  return [{
    path: "/sample/check-box",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const CheckBoxSample = require("./sample");
        cb(null, CheckBoxSample);
      });
    },
  }];
}
