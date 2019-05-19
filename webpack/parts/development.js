const { BundleAnalyzer } = require("../plugins");
const p = require("../../common/path");

module.exports = {
    // devtool: "source-map",
    mode: "development",
    watch: true,
    watchOptions: { ignored: /node_modules/ },
    plugins: [
        // BundleAnalyzer
    ],
    devServer: {
        port: 8080,
        hot: true,
        // compress: true,
        inline: true,
        // https: true,
        // writeToDisk: true,
        contentBase: p.dist,
        // noInfo: true,
        // clientLogLevel: "error",
        proxy: { "/api": "http://localhost:3000" }
    }
};
