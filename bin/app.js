"use strict";

var http = require("http"),
    slogan = require("../index");

http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/plain; charset=utf8"});
    res.end(slogan("peerigon") + "\n");
}).listen(7177, "127.0.0.1");

console.log("Server running at http://127.0.0.1:7177/");