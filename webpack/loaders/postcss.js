const autoprefixer = require("autoprefixer")({ browsers: ["> 1%", "last 2 versions"] });
const cssnano = require("cssnano");

module.exports = {
    loader: "postcss-loader",
    options: {
        ident: "postcss",
        plugins: [autoprefixer, cssnano]
    }
};
