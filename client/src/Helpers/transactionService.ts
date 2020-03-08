// Note we are using react proxy to proxy these port 3000 requests to port 8080
import BankTransaction from "./../Types/bankTransaction";

export default class TransactionService{

  getTransactions(){

    return fetch("http://localhost:3000/transactions")
    .then(response => response.json())
    .catch((error) => {
      console.log("in de error catch gekomen");
      throw(error);
    })
  }

  postTransactions(transactions: BankTransaction[]){

    let test = {"hallo": "doei"};
    let jsonTest = JSON.stringify(test);

    console.log(transactions);

    return fetch("http://localhost:3000/savetransactions", {
      method: 'POST',
      headers:{
        'Content-Type': 'applications/json'
      },
      body: JSON.stringify({transactions})
    }).then(() => {
      console.log("POST succesfull");
      return;
    }).catch((err: Error) => {
      console.error('Error: ', err);
    })
  }
}