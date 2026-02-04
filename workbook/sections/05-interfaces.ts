/**
 * Module 5: Interfaces
 *
 * Focus: interface basics, extension, and interface vs type.
 */

/**
 * Interface basics.
 */
interface User {
  id: number;
  email: string;
}

const user: User = { id: 1, email: "user@example.com" };
console.log(user);

/**
 * Extending interfaces.
 */
interface Admin extends User {
  role: string;
}

const admin: Admin = { id: 2, email: "admin@example.com", role: "super" };
console.log(admin);

/**
 * Interface vs type:
 * - interface is extendable and class-friendly
 * - type is great for unions and utility types
 */

/**
 * Exercise:
 * Create an interface for Wallet with address (string) and balance (number).
 */
// TODO: Uncomment and complete.
// interface Wallet {
//   address: string;
//   balance: number;
// }
// const wallet: Wallet = { address: "0xabc", balance: 10 };
// console.log(wallet);

export {};
