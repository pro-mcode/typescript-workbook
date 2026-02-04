/**
 * Module 2: Basic Types
 *
 * Focus: primitives, arrays, tuples, any vs unknown.
 */

/**
 * Primitive types: boolean, number, string.
 */
let isActive: boolean = true;
let age: number = 25;
let username: string = "Max";

console.log(isActive, age, username);

/**
 * Arrays can be typed with T[] or Array<T>.
 */
let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"];

console.log(scores, names);

/**
 * Tuples enforce a fixed length and specific types per position.
 */
let user: [number, string] = [1, "Admin"];
console.log(user);

/**
 * `any` disables type checking; `unknown` forces type narrowing.
 */
let value: any = 10;
let safeValue: unknown = "hello";
console.log(value, safeValue);

/**
 * Exercise:
 * 1) Create an array of numbers.
 * 2) Create a tuple representing [id, email].
 */
// TODO: Uncomment and complete.
// const ids: number[] = [1, 2, 3];
// const userTuple: [number, string] = [1, "user@example.com"];
// console.log(ids, userTuple);

export {};
