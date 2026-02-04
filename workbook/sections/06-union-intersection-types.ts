/**
 * Module 6: Union and Intersection Types
 *
 * Focus: unions, narrowing, intersections.
 */

/**
 * Union types allow a variable to be one of multiple types.
 */
type Status = "pending" | "success" | "failed";
const status: Status = "pending";
console.log(status);

/**
 * Narrowing with typeof.
 */
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}
printId("abc");
printId(123);

/**
 * Intersection types combine multiple types.
 */
type A = { a: number };
type B = { b: string };
type C = A & B;

const combined: C = { a: 1, b: "two" };
console.log(combined);

/**
 * Exercise:
 * Create a union for API response states ("idle" | "loading" | "error" | "success").
 */
// TODO: Uncomment and complete.
// type ApiState = "idle" | "loading" | "error" | "success";
// const currentState: ApiState = "idle";
// console.log(currentState);

export {};
