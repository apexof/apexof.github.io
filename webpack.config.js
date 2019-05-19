const merge = require("webpack-merge");
const { IS_DEV } = require("./common/config");
const { base, dev, prod } = require("./webpack/parts");

const modeCfg = IS_DEV ? dev : prod;
const config = merge(base, modeCfg);

module.exports = config;
