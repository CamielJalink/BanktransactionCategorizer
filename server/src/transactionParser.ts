import { readFile } from "fs";
import Transaction from "./transaction";


export default class transactionParser{

  wellFormedTransactions: Transaction[] = [];

  makeFunc(){
    let that = this;

    return function(err: Error, input: string){
      let rawTransactions: string[] = input.split("\n");
  
      for(let i = 1; i < rawTransactions.length; i++){
        let transaction = new Transaction(rawTransactions[i]); 
        that.wellFormedTransactions.push(transaction);
      }
    }
  }

  constructor(){
    let parseTransactions = this.makeFunc();
    readFile("input.txt", "utf8", parseTransactions);
  }


  getTransactions(){
    return this.wellFormedTransactions;
  }
}