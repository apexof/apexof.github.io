const p = require("../../common/path");

module.exports = {
    test: /\.jsx?$/,
    include: p.front,
    loader: "babel-loader"
};
