const { UglifyJsPlugin, CompressionPlugin, ChangeExtensionPlugin, HashedModuleIdsPlugin } = require("../plugins");

module.exports = {
    mode: "production",
    watch: true,
    devtool: false,
    optimization: {
        runtimeChunk: true,
        minimizer: [UglifyJsPlugin]
    },
    plugins: [
        CompressionPlugin,
        ChangeExtensionPlugin,
        HashedModuleIdsPlugin
    ]
};
