import parseTransactions from "./src/transactionParser";
import Transaction from "./src/transaction";
import express from "express";
const app = express();
const port = 8080;

app.get( "/", ( req, res ) => {
  res.send( "Hello world!" );
});


app.get( "/transactions", ( req, res ) => {
  
  return parseTransactions().then( (wellFormedTransactions: Transaction[]) => {
    res.send(wellFormedTransactions);
  }).catch((error: Error) => {
    console.log(error);
  });
})


// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
});