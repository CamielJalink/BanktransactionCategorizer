"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var parseTransactions_1 = __importDefault(require("./src/parseTransactions"));
var saveTransactions_1 = __importDefault(require("./src/saveTransactions"));
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var port = 8080;
app.use(body_parser_1.default.json()); // Black magic...
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.get("/transactions", function (req, res) {
    return parseTransactions_1.default().then(function (wellFormedTransactions) {
        res.send(wellFormedTransactions);
    }).catch(function (error) {
        console.log(error);
    });
});
app.post("/savetransactions", function (req, res) {
    return saveTransactions_1.default(req.body).then(function () {
        res.send("You did it!");
    });
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
