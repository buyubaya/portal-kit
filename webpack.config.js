/* eslint no-var: 0, vars-on-top: 0 */
require("babel-register");

var config = require("./webpack/webpack.config");
var sampleConfig = require("./webpack/webpack.config.sample");
// module.exports = config;
export { config, sampleConfig };
// module.exports = {config, sampleConfig}
