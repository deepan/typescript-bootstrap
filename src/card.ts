export class Card {
  private accountNumber: number;

  constructor(accountNumber: number) {
    this.accountNumber = accountNumber;
  }

  getAccountNumber() {
    return this.accountNumber;
  }

}