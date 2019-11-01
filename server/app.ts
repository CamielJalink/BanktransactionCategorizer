import transactionParser from "./src/transactionParser";
import Transaction from "./src/transaction";
const express = require("express");
const app = express();
const port = 8080;

let parser = new transactionParser();

app.get( "/", ( req, res ) => {
  res.send( "Hello world!" );
});


app.get( "/transactions", ( req, res ) => {
  let wellFormedtransactions: Transaction[] = parser.getTransactions();
  res.send(wellFormedtransactions);
})


// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
});