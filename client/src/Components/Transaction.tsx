import React, { Component } from "react";
import BankTransaction from "../Types/bankTransaction"

interface Props {
  bankTransaction: BankTransaction;
}

class Transaction extends Component<Props>{

  render(){

    return(
      <div>
        <h2>Banktransactie:</h2>
        <p>Bedrag: {this.props.bankTransaction.bedrag}</p>
        <p>Omschrijving: {this.props.bankTransaction.omschrijving}</p>
        <p>Datum: {this.props.bankTransaction.datum}</p>
        <p>Naam tegenpartij: {this.props.bankTransaction.naamTegenpartij}</p>
        <p>Naam uiteindelijke partij: {this.props.bankTransaction.naamUiteindelijkePartij}</p>
      </div>
    )
  }
}


export default Transaction; 