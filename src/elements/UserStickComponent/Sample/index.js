export default function createRoutes() {
  return [{
    path: "/sample/user-stick",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const UserStickSample = require("./Sample");
        cb(null, UserStickSample);
      });
    },
  }];
}
