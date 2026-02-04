/**
 * Module 16: Testing with TypeScript
 *
 * Common tools: Jest + ts-jest, or Vitest.
 * This file shows a minimal example and a test stub.
 */

/**
 * A tiny function to test.
 */
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3));

/**
 * Example test assertion (framework required).
 * expect(add(2, 3)).toBe(5);
 */

/**
 * Exercise:
 * Create a test file in your test runner and assert add(2, 3) === 5.
 */
// TODO: Write a unit test in your chosen test framework.

export {};
