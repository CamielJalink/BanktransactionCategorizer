import { readFile } from "fs";
import { promisify } from "util";
import Transaction from "./transaction";


export default function parseTransactions(): Promise<Transaction[]>{

  let promisifyReadFile = promisify(readFile);
  let wellFormedTransactions: Transaction[] = [];


  return promisifyReadFile("input.txt", "utf8").then((input: string) => {
    
    if (input && input.length > 0) {
      let rawTransactions: string[] = input.split("\n");

      for (let i = 1; i < rawTransactions.length; i++) {
        let transaction = new Transaction(rawTransactions[i]);
        wellFormedTransactions.push(transaction);
      }
    } else {
      console.log("No input.txt file found");
    }

    return wellFormedTransactions;
  }).catch((error: Error) => {
    throw(error);
  })
}