const express = require("express");
const fs = require("fs");
const { exec } = require("child_process");
const app = express();
const port = 443;

app.use("/", express.static(__dirname + "/"));

app.get("/", (req, res) => {
  fs.readFile("src/html/index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
