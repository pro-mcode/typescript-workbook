/**
 * Module 12: Type Guards
 *
 * Focus: user-defined type guards for safer narrowing.
 */

/**
 * A guard that checks if a value is a string.
 */
function isString(value: unknown): value is string {
  return typeof value === "string";
}

const maybeValue: unknown = "hello";
if (isString(maybeValue)) {
  console.log(maybeValue.toUpperCase());
}

/**
 * Exercise:
 * Create a type guard for User.
 */
// TODO: Uncomment and complete.
// type User = { id: number; email: string };
// function isUser(value: unknown): value is User {
//   return (
//     typeof value === "object" &&
//     value !== null &&
//     "id" in value &&
//     "email" in value
//   );
// }
// const maybeUser: unknown = { id: 1, email: "a@b.com" };
// if (isUser(maybeUser)) {
//   console.log(maybeUser.email);
// }

export {};
