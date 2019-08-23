export default function createRoutes() {
  return [{
    path: "/sample/text-box",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const TextBoxSample = require("./sample");
        cb(null, TextBoxSample);
      });
    },
  }];
}
