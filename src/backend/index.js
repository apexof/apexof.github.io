const express = require("express");
const p = require("../../common/path");
const { PORT } = require("../../common/config");

const app = express();

app.get("*.gz", (req, res, next) => {
    res.set("Content-Encoding", "gzip");
    next();
});

app.use(express.static(p.dist));

app.listen(PORT, console.log(PORT));
