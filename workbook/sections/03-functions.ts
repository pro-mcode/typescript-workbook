/**
 * Module 3: Functions
 *
 * Focus: function typing, arrow functions, optional/default params,
 * and void/never return types.
 */

/**
 * Function typing with explicit parameter and return types.
 */
function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

/**
 * Arrow functions can be typed the same way.
 */
const multiply = (a: number, b: number): number => a * b;
console.log(multiply(3, 4));

/**
 * Optional and default parameters.
 */
function greet(name: string, title?: string): string {
  return `Hello ${title ?? ""} ${name}`.trim();
}
console.log(greet("Ava"));
console.log(greet("Ava", "Dr."));

/**
 * Void and never.
 */
function logMessage(msg: string): void {
  console.log(msg);
}

function throwError(): never {
  throw new Error("Crash");
}

logMessage("Typed functions are great.");

/**
 * Exercise:
 * Write a function that returns a user object with id and name.
 */
// TODO: Uncomment and complete.
// function createUser(id: number, name: string): { id: number; name: string } {
//   return { id, name };
// }
// console.log(createUser(1, "Max"));

export {};
