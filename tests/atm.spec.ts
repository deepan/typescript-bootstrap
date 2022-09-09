import { it, describe, expect, vi } from 'vitest';
import { ATM } from '../src/atm';
import { Bank } from '../src/bank';
import { Card } from '../src/card';

describe('ATM', () => {
  it('should throw error if user inputs an invalid pin', async () => {
    const accountNumber = 100001;
    const pin = 123;
    const amountToBeWithdrawn = 1000;

    const bank = new Bank();

    vi.spyOn(bank, 'validatePin').mockImplementation(() => false);

    const atm = new ATM(bank);
    const card = new Card(accountNumber);

    expect(() => { atm.withdraw(card, pin, amountToBeWithdrawn); }).toThrowError(new Error('invalid pin'));
  });

  it('should return money if user inputs a valid pin', async () => {
    const accountNumber = 100001;
    const pin = 123;
    const amountToBeWithdrawn = 1000;

    const bank = new Bank();

    vi.spyOn(bank, 'validatePin').mockImplementation(() => true);
    vi.spyOn(bank, 'debit').mockImplementation((accountNumber, amount) => amount);

    const atm = new ATM(bank);
    const card = new Card(accountNumber);

    expect(atm.withdraw(card, pin, amountToBeWithdrawn)).equals(1000);
  });

});

