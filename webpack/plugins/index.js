const HtmlWebPackPlugin = require("./HtmlWebPackPlugin");
const ProvidePlugin = require("./ProvidePlugin");
const CleanWebpackPlugin = require("./CleanWebpackPlugin");
const MiniCssExtractPlugin = require("./MiniCssExtractPlugin");
const ManifestPlugin = require("./ManifestPlugin");
const BundleAnalyzer = require("./BundleAnalyzer");
const UglifyJsPlugin = require("./UglifyJsPlugin");
const CompressionPlugin = require("./CompressionPlugin");
const ChangeExtensionPlugin = require("./ChangeExtensionPlugin");
const HashedModuleIdsPlugin = require("./HashedModuleIdsPlugin");

module.exports = {
    HtmlWebPackPlugin,
    ProvidePlugin,
    CleanWebpackPlugin,
    MiniCssExtractPlugin,
    ManifestPlugin,
    BundleAnalyzer,
    UglifyJsPlugin,
    CompressionPlugin,
    ChangeExtensionPlugin,
    HashedModuleIdsPlugin
};
