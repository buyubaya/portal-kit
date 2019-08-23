import express from 'express';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import config from '../webpack/webpack.config.sample';
import { createMemoryHistory, RouterContext, match } from 'react-router';
// because we are already using helmet
const _ = require("underscore")
const fs = require('fs');

const isDeveloping = 'development';
const port = 3005;
const server = global.server = express();

// Stub for assets, in case running in dev mode.
let assets;

server.set('port', port);

// Homepage
var masterPage = null;;
fs.readFile(__dirname + "/index.html", (err, data) => {
    if (err) throw err;
    masterPage = _.template("" + data, { variable: "data" });
});

// webpack compiler config
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: './dist',
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: true,
        modules: false,
    },

});
server.use(middleware);
server.use(webpackHotMiddleware(compiler, {
    log: console.log,
}));

// Render Document (include global styles)
const indexPage = (initialState) => {
    return masterPage({
        // headTitle: "Sample Kit Page",
        headMeta: "",
        headLink: "",
        cssContent: "",//data.css.content,
        html: "",//data.html,
        cssRenderedClassNames: "",//JSON.stringify(data.css.renderedClassNames),
        initialState: "",
        userData: {} || null,
        extraData: {} || null,
        // javascript1: (isDeveloping ? '/samples/vendor.js' : "assets.vendor.js"),
        javascript2: (isDeveloping ? '/samples/main.js' : "assets.main.js"),
        // javascript3: ('/samples/sample.js')
    });
};

// add public folder
server.use(express.static('public'));

// SSR Logic

server.get('*', (req, res) => {
    res.status(200).send(indexPage({}, req.user));
});
// Listen
server.listen(port, '0.0.0.0', function onStart(err) {
    if (err) {
        console.log(err);
    }

    console.info('==> 🌎 Listening on port %s.' +
        'Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

module.exports = server;
