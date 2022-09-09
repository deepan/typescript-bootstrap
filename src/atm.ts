import { Bank } from "./bank";
import { Card } from "./card";

export class ATM {
  private bank: Bank;

  constructor(bank: Bank) {
    this.bank = bank;
  }

  withdraw(card: Card, pin: number, amountToBeWithdrawn: number): number {
    if (!this.bank.validatePin(card, pin)) {
      throw new Error('invalid pin');
    }
    return this.bank.debit(card.getAccountNumber(), amountToBeWithdrawn);
  }
}

