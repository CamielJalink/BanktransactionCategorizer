export default interface BankTransaction{
  omschrijving: string;
  datum: string;
  bedrag: number;
  isBijschrijving: boolean;
  naamTegenpartij: string;
  naamUiteindelijkePartij: string;
  categorie: string;
}