export default function createRoutes() {
  return [{
    path: "/sample/button",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const ButtonSample = require("./Sample");
        cb(null, ButtonSample);
      });
    },
  }];
}
