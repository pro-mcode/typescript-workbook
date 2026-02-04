/**
 * Module 14: Error Handling
 *
 * Focus: try/catch and safe error handling.
 */

/**
 * Basic error handling pattern.
 */
try {
  throw new Error("Failed");
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

/**
 * Exercise:
 * Wrap a JSON.parse call in try/catch and return a safe result type.
 */
// TODO: Uncomment and complete.
// type ParseResult = { ok: true; value: unknown } | { ok: false; error: string };
// function safeParse(input: string): ParseResult {
//   try {
//     return { ok: true, value: JSON.parse(input) };
//   } catch (e) {
//     const message = e instanceof Error ? e.message : "Unknown error";
//     return { ok: false, error: message };
//   }
// }
// console.log(safeParse("{\"a\":1}"));
// console.log(safeParse("oops"));

export {};
