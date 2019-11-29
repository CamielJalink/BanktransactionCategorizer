"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var transactionParser_1 = __importDefault(require("./src/transactionParser"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = 8080;
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.get("/transactions", function (req, res) {
    return transactionParser_1.default().then(function (wellFormedTransactions) {
        res.send(wellFormedTransactions);
    }).catch(function (error) {
        console.log(error);
    });
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
