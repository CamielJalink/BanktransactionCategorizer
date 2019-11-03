import React, { Component } from "react";
import Transaction from "./Transaction";
import BankTransaction from "../Types/bankTransaction";
import TransactionService from "../Helpers/transactionService";

interface Props {
}

interface State {
  allTransactions: BankTransaction[];
  currentTransaction: number;
}

class CategoryPicker extends Component<Props, State>{
  
  transactionService: TransactionService;

  constructor(props: Props){
    super(props);
    this.transactionService = new TransactionService();
    this.state = {
      allTransactions: [
        { isBijschrijving: true, omschrijving: "Money4U", bedrag: 5, datum: "15-04", categorie: "" },
        { isBijschrijving: false, omschrijving: "Money4Drinks", bedrag: -7, datum: "17-04", categorie: "" },
        { isBijschrijving: false, omschrijving: "Money4Games", bedrag: -3, datum: "13-04", categorie: "" },
      ],
      currentTransaction: 0
    }
    this.setCatLasten = this.setCatLasten.bind(this);
    this.setCatAbonnementen = this.setCatAbonnementen.bind(this);
    this.setCatVerzorging = this.setCatVerzorging.bind(this);
    this.setCatGames = this.setCatGames.bind(this);
    this.setCatCadeaus = this.setCatCadeaus.bind(this);
    this.setCatVakantie = this.setCatVakantie.bind(this);
    this.setCatOverig = this.setCatOverig.bind(this);
    this.getTransactions = this.getTransactions.bind(this);
  }


  setCatLasten(){
    this.setCategory("lasten");
  }
  setCatAbonnementen(){
    this.setCategory("abonnementen");
  }
  setCatVerzorging(){
    this.setCategory("verzorging");
  }
  setCatGames(){
    this.setCategory("games");
  }
  setCatCadeaus(){
    this.setCategory("cadeau");
  }
  setCatVakantie(){
    this.setCategory("vakantie");
  }
  setCatOverig(){
    this.setCategory("overig");
  }


  setCategory(category: string){
    let allTransactionsNew: BankTransaction[] = this.state.allTransactions;
    allTransactionsNew[this.state.currentTransaction].categorie = category;

    this.setState({
      allTransactions: allTransactionsNew
    })
    this.setNextTransaction();
  }


  setNextTransaction(){
    if(this.state.allTransactions.length > this.state.currentTransaction + 1){
      this.setState({
        currentTransaction: this.state.currentTransaction + 1
      })
    } else{
      console.log(this.state.allTransactions);
      alert("You did all of them, congrats!");
    }
  }

  getTransactions(){
    return this.transactionService.getTransactions().then((result) => {
      this.setState({
        allTransactions: result
      })
    });
  }

  render(){
    return(
      <div>
        <button onClick={this.setCatLasten}>Vaste lasten</button>
        <button onClick={this.setCatAbonnementen}>Abonnementen</button>
        <button onClick={this.setCatVerzorging}>Verzorging & kleing</button>
        <Transaction bankTransaction={this.state.allTransactions[this.state.currentTransaction]}></Transaction>
        <button onClick={this.setCatGames}>Games & Uitjes</button>
        <button onClick={this.setCatCadeaus}>Cadeaus</button>
        <button onClick={this.setCatVakantie}>Vakantie</button>
        <button onClick={this.setCatOverig}>Overig</button>
        
        <br/>
        <br/>
        <button onClick={this.getTransactions}>Ophalen transacties</button>
      </div>
    )
  }
}

export default CategoryPicker;