import parseTransactions from "./src/parseTransactions";
import saveTransactions from "./src/saveTransactions";
import Transaction from "./src/transaction";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;
app.use(bodyParser.json()); // Black magic...

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


app.post( "/savetransactions", ( req, res ) => {

  console.log(req.body);

  return saveTransactions(req.body).then(() => {
    res.send("You did it!");
  });
})


// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
});