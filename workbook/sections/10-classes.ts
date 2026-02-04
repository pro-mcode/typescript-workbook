/**
 * Module 10: Classes
 *
 * Focus: class syntax and access modifiers.
 */

/**
 * A simple Wallet class with a private balance.
 */
class Wallet {
  private balance: number;

  /**
   * Constructor for initializing the account balance
   * @param {number} balance - The initial balance to be set for the account
   */
  constructor(balance: number) {
    this.balance = balance; // Assign the passed balance to the instance's balance property
  }

  /**
   * Adds the specified amount to the current balance
   * @param amount The amount to be deposited to the account
   */
  // Increase the balance by the deposit amount
  deposit(amount: number) {
    this.balance += amount;
  }

  /**
   * Retrieves the current balance value
   * @returns The current balance as a number
   */
  getBalance(): number {
    return this.balance;
  }
}

const wallet = new Wallet(100);
wallet.deposit(50);
console.log(wallet.getBalance());

/**
 * Access modifiers:
 * - public (default)
 * - private (only inside class)
 * - protected (class + subclasses)
 */

/**
 * Exercise:
 * Create a class with readonly properties.
 */
// TODO: Uncomment and complete.
// class Profile {
//   readonly id: string;
//   readonly email: string;
//
//   constructor(id: string, email: string) {
//     this.id = id;
//     this.email = email;
//   }
// }
// const profile = new Profile("p1", "p1@example.com");
// console.log(profile);

export {};
