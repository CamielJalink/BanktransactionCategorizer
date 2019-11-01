"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var transaction_1 = require("./transaction");
var transactionParser = /** @class */ (function () {
    function transactionParser() {
        this.wellFormedTransactions = [];
        var parseTransactions = this.makeFunc();
        fs_1.readFile("input.txt", "utf8", parseTransactions);
    }
    transactionParser.prototype.makeFunc = function () {
        var that = this;
        return function (err, input) {
            var rawTransactions = input.split("\n");
            for (var i = 1; i < rawTransactions.length; i++) {
                var transaction = new transaction_1["default"](rawTransactions[i]);
                that.wellFormedTransactions.push(transaction);
            }
        };
    };
    transactionParser.prototype.getTransactions = function () {
        return this.wellFormedTransactions;
    };
    return transactionParser;
}());
exports["default"] = transactionParser;
