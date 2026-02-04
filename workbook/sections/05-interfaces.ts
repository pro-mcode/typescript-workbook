/**
 * Module 5: Interfaces
 *
 * Focus: interface vs type, interface basics, extension, and declaration merging.
 */

/**
 * Interface vs type:
 * - interface is extendable and class-friendly
 * - type is great for unions and utility types
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
 * Declaration merging:
 * Multiple interface declarations with the same name are merged.
 * This is useful for augmenting third-party types or adding fields later.
 */
interface ApiResponse {
  status: number;
}

interface ApiResponse {
  data: string;
}

const response: ApiResponse = { status: 200, data: "ok" };
console.log(response);

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

/**
 * Exercise: Declaration merging
 * Create two interface declarations named `Project`:
 * - First should include name: string
 * - Second should include owner: string
 * Then create a Project value with both fields and log it.
 */
// TODO: Uncomment and complete.
// interface Project {
//   name: string;
// }
// interface Project {
//   owner: string;
// }
// const project: Project = { name: "Apollo", owner: "Riley" };
// console.log(project);

export {};
