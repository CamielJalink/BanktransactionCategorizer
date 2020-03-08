import { writeFile } from "fs";
import { promisify } from "util";
import Transaction from "./transaction";

export default function saveTransactions(transactions: Transaction[]){

  const promisiedWriteFile = promisify(writeFile);
  console.log(transactions);

  let JsonTransactions = JSON.stringify(transactions);

  return promisiedWriteFile('./data/transactions.json', JsonTransactions, 'utf8').then(() => {
    return;
  })
}