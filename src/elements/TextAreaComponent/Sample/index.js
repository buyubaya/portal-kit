export default function createRoutes() {
  return [{
    path: "/sample/text-area",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const TextAreaSample = require("./sample");
        cb(null, TextAreaSample);
      });
    },
  }];
}
