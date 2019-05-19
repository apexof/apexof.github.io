const CompressionPlugin = require("compression-webpack-plugin");

module.exports = new CompressionPlugin({
    cache: true,
    deleteOriginalAssets: true,
    test: /\.js(\?.*)?$/i
});
