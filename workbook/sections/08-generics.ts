/**
 * Module 8: Generics
 *
 * Focus: generic functions, interfaces, and constraints.
 */

/**
 * Generic function.
 */
function identity<T>(value: T): T {
  return value;
}

console.log(identity(123));
console.log(identity("hello"));

/**
 * Generic interface.
 */
interface ApiResponse<T> {
  data: T;
  error?: string;
}

const response: ApiResponse<string> = { data: "ok" };
console.log(response);

/**
 * Generic constraint.
 */
function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}
logLength("length");
logLength([1, 2, 3]);

/**
 * Exercise:
 * Build a generic Result<T> type with success and error states.
 */
// TODO: Uncomment and complete.
// type Result<T> =
//   | { ok: true; value: T }
//   | { ok: false; error: string };
// const ok: Result<number> = { ok: true, value: 42 };
// const bad: Result<number> = { ok: false, error: "Oops" };
// console.log(ok, bad);

export {};
