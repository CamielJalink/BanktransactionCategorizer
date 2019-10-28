var express = require("express");
var app = express();
var port = 8080;
// define a route handler for the default home page
app.get("/", function (req, res) {
    res.send("Hello world!");
});
app.get("/transactions", function (req, res) {
    var testTransaction = {
        isBijschrijving: true,
        omschrijving: "Hello from backend!",
        bedrag: 700,
        datum: "17-05"
    };
    res.send(testTransaction);
});
// start the Express server
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
