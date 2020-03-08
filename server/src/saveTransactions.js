"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var util_1 = require("util");
function saveTransactions(transactions) {
    var promisiedWriteFile = util_1.promisify(fs_1.writeFile);
    console.log(transactions);
    var JsonTransactions = JSON.stringify(transactions);
    return promisiedWriteFile('./data/transactions.json', JsonTransactions, 'utf8').then(function () {
        return;
    });
}
exports.default = saveTransactions;
