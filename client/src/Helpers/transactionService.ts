export default class TransactionService{

  getTransactions(){

    return fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .catch((error) => {
      console.log("in de error catch gekomen");
      throw(error);
    })
  }
}