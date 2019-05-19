const cssLoader = require("./css-loader")();
const postcss = require("./postcss");
const sassLoader = require("./sass-loader");
const styleLoader = require("./style-loader");
const miniCss = require("./mini-css");
const urlLoader = require("./url-loader");

module.exports = {
    cssLoader,
    postcss,
    sassLoader,
    miniCss,
    styleLoader,
    urlLoader
};
