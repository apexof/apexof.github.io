const { urlLoader } = require("../loaders");

module.exports = {
    test: /\.(jpe?g|png|gif|svg)/i,
    use: urlLoader
};
