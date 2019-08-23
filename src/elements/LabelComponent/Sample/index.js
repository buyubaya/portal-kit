export default function createRoutes() {
  return [{
    path: "/sample/label",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const LabelSample = require("./sample");
        cb(null, LabelSample);
      });
    },
  }];
}
