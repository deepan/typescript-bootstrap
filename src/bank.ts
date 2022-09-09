import { Card } from "./card";

export class Bank {
  private accounts: Map<number, number> = new Map();
  private cards: Map<number, number> = new Map();

  addAccount(accountNo: number) {
    this.accounts.set(accountNo, 0);
  }

  addCard(accountNo: number, pin: number) {
    this.cards.set(accountNo, pin);
  }

  credit(accountNo: number, amount: number) {
    this.accounts.set(accountNo, this.accounts.get(accountNo) + amount);
  }

  getOutstandingBalance(accountNo: number) {
    return this.accounts.get(accountNo);
  }

  debit(accountNumber: number, amount: number): number {
    if (this.accounts.get(accountNumber) < 1000) {
      throw new Error('insufficiant balance');
    }
    const balance = this.accounts.get(accountNumber) - amount;
    this.accounts.set(accountNumber, balance);
    return amount;
  }

  validatePin(card: Card, pin: number): boolean {
    return this.cards.get(card.getAccountNumber()) === pin;
  }
}