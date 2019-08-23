import baseConfig, { options } from "./base.config";

const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "/dist");
const PUBLIC_DIR = path.resolve(__dirname, "/public");

export default {
  ...baseConfig,

  entry: {
    "react-bootstrap": "./src/index.js",
    // sample config
    sample: [
      "webpack/hot/only-dev-server",
      "webpack-hot-middleware/client",
      "./samples/client.js",
    ],
  },

  output: {
    path: BUILD_DIR,
    filename: options.optimizeMinimize ? "[name].min.js" : "[name].js",
    library: "ReactBootstrap",
    libraryTarget: "umd",
    // sample config
    publicPath: PUBLIC_DIR,
  },

  externals: [
    {
      react: {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react",
      },
    },
    {
      "react-dom": {
        root: "ReactDOM",
        commonjs2: "react-dom",
        commonjs: "react-dom",
        amd: "react-dom",
      },
    },
  ],
};
