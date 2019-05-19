const path = require("path");

const root = process.cwd();

const p = {
    dist: path.resolve(root, "dist"),
    src: path.resolve(root, "src"),
    front: path.resolve(root, "src", "front")
};

module.exports = p;
