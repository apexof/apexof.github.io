const CleanWebpackPlugin = require("clean-webpack-plugin");

const options = {
    cleanOnceBeforeBuildPatterns:
        ["*.*", "!static", "!index.html"]
};

module.exports = new CleanWebpackPlugin(options);
