"use strict";
exports.__esModule = true;
var Transaction = /** @class */ (function () {
    function Transaction(raw) {
        this.categorie = "";
        var rawArray = raw.split("\",\"");
        this.omschrijving = rawArray[19];
        this.datum = rawArray[4];
        var bedragString = rawArray[6].replace(",", ".");
        this.bedrag = parseFloat(bedragString);
        if (this.bedrag > 0) {
            this.isBijschrijving = true;
        }
        else {
            this.isBijschrijving = false;
        }
    }
    return Transaction;
}());
exports["default"] = Transaction;
