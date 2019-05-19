const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const options = { filename: "style.[hash].css" };

module.exports = new MiniCssExtractPlugin(options);
