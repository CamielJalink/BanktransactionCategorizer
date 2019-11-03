export default interface BankTransaction{
  omschrijving: string;
  datum: string;
  bedrag: number;
  isBijschrijving: boolean;
  categorie: string;
}