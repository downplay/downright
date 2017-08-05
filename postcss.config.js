/* eslint-disable */
var autoprefixer = require("autoprefixer");
var cssCustomProperties = require("postcss-custom-properties");
var postcssCalc = require("postcss-calc");
var postcssImport = require("postcss-import");

module.exports = {
    plugins:
    [
        autoprefixer(),
        cssCustomProperties(),
        postcssCalc(),
        postcssImport()
    ]
};
/* eslint-enable */
