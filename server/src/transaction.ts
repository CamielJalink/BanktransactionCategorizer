export default class Transaction{
  
  omschrijving: string;
  datum: string;
  bedrag: number;
  isBijschrijving: boolean;
  naamTegenpartij: string;
  naamUiteindelijkePartij: string;
  categorie: string = "";
  
  constructor(raw: string){
    let rawArray = raw.split("\",\"");
    this.omschrijving = rawArray[19];
    this.datum = rawArray[4];
    this.naamTegenpartij = rawArray[9];
    this.naamUiteindelijkePartij = rawArray[10];
    let bedragString = rawArray[6].replace(",", ".");
    this.bedrag = parseFloat(bedragString);
    
    if(this.bedrag > 0){
      this.isBijschrijving = true;
    } else{
      this.isBijschrijving = false;
    }
  }
}


// 9 - Tegenrekenngnummer
// (en dus array[9]) 10- Naam tegenpartij
// 11- Naam uiteindelijke partij  (? nodig ?)
// DONE 5 - Datum
// DONE 7 - Bedrag
// 20, 21, 22: Omschrijving (in drie regels)