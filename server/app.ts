const express = require("express");
const app = express();
const port = 8080;

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
  res.send( "Hello world!" );
});

app.get( "/transactions", ( req, res ) => {

  let testTransaction = { 
    isBijschrijving: true,
    omschrijving: "Hello from backend!",
    bedrag: 700,
    datum: "17-05"
  }

  res.send( testTransaction );
})

// start the Express server
app.listen( port, () => {
  console.log( `server started at http://localhost:${ port }` );
} );