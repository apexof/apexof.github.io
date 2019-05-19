const UglifyJsPlugin = require("terser-webpack-plugin");

module.exports = new UglifyJsPlugin({
    cache: true,
    parallel: true
});
