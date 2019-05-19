const path = require("path");
const { js, img, css, scss } = require("../presets");
const p = require("../../common/path");
const { HtmlWebPackPlugin, ProvidePlugin, CleanWebpackPlugin, MiniCssExtractPlugin, ManifestPlugin } = require("../plugins");

module.exports = {
    // context: p.front,
    entry: { about: path.resolve(p.front, "index.jsx") },
    output: {
        filename: "[name].[hash].js",
        path: p.dist,
        publicPath: "/"
    },
    plugins: [
        CleanWebpackPlugin,
        MiniCssExtractPlugin,
        HtmlWebPackPlugin,
        ProvidePlugin,
        ManifestPlugin
    ],
    module: { rules: [js, img, css, scss] },
    optimization: {
        splitChunks: {
            chunks: "all",
            minSize: 1
            // minChunks: 2
        }
    },
    resolve: { extensions: [".js", ".json", ".jsx"] }
};
