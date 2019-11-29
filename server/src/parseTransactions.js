"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var util_1 = require("util");
var transaction_1 = __importDefault(require("./transaction"));
function parseTransactions() {
    var promisifyReadFile = util_1.promisify(fs_1.readFile);
    var wellFormedTransactions = [];
    return promisifyReadFile("input.txt", "utf8").then(function (input) {
        if (input && input.length > 0) {
            var rawTransactions = input.split("\n");
            for (var i = 1; i < rawTransactions.length; i++) {
                var transaction = new transaction_1.default(rawTransactions[i]);
                wellFormedTransactions.push(transaction);
            }
        }
        else {
            console.log("No input.txt file found");
        }
        return wellFormedTransactions;
    }).catch(function (error) {
        throw (error);
    });
}
exports.default = parseTransactions;
