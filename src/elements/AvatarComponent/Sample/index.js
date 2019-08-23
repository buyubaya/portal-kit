export default function createRoutes() {
  return [{
    path: "/sample/avatar",
    getComponents(location, cb) {
      require.ensure([
      ], (require) => {
        const AvatarSample = require("./sample");
        cb(null, AvatarSample);
      });
    },
  }];
}
