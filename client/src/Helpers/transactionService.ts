import BankTransaction from "../Types/bankTransaction";

export default class TransactionService{

  getTransactions(){

    return fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .catch((error) => {
      console.log("in de error catch gekomen");
      throw(error);
    })

    // Probeer de transaction om te vormen tot een BankTransaction.
    // return 1 of meerdere BankTransactions naar mijn parent.
  }
}