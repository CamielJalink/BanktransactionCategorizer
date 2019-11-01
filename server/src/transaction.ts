export default class Transaction{
  
  omschrijving: string;
  datum: string;
  bedrag: number;
  isBijschrijving: boolean;
  categorie: string = "";
  
  constructor(raw: string){
    let rawArray = raw.split("\",\"");
    this.omschrijving = rawArray[19];
    this.datum = rawArray[4];
    
    let bedragString = rawArray[6].replace(",", ".");
    this.bedrag = parseFloat(bedragString);
    
    if(this.bedrag > 0){
      this.isBijschrijving = true;
    } else{
      this.isBijschrijving = false;
    }
  }
}