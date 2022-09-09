import { describe, expect, it } from "vitest";
import { Bank } from "../src/bank";
import { Card } from "../src/card";

describe('Bank', () => {
  it('validatePin should return true if correct pin is passed', () => {
    const bank = new Bank();

    bank.addAccount(1000);
    bank.addCard(1000, 123);

    expect(bank.validatePin(new Card(1000), 123)).equals(true);
  });

  it('validatePin should return false if incorrect pin is passed', () => {
    const bank = new Bank();

    bank.addAccount(1000);
    bank.addCard(1000, 123);

    expect(bank.validatePin(new Card(1000), 456)).equals(false);
  });

  it('debit method should return amount if enough funds available in the account', () => {
    const bank = new Bank();

    bank.addAccount(1000);
    bank.credit(1000, 5000);

    expect(bank.getOutstandingBalance(1000)).equals(5000);
    expect(bank.debit(1000, 2000)).equals(2000);
    expect(bank.getOutstandingBalance(1000)).equals(3000);
  });

  it('debit method should return amount if enough funds available in the account', () => {
    const bank = new Bank();

    bank.addAccount(1000);
    bank.credit(1000, 500);

    expect(bank.getOutstandingBalance(1000)).equals(500);
    expect(() => { expect(bank.debit(1000, 2000)); }).toThrowError(new Error('insufficiant balance'));
  });
});