"use strict";
exports.__esModule = true;
var transactionParser_1 = require("./src/transactionParser");
var express = require("express");
var app = express();
var port = 8080;
var parser = new transactionParser_1["default"]();
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.get("/transactions", function (req, res) {
    var wellFormedtransactions = parser.getTransactions();
    res.send(wellFormedtransactions);
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
