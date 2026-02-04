/**
 * Final Capstone Project
 *
 * Build a typed API client with:
 * - Typed requests
 * - Generic responses
 * - Error handling
 * - Domain models
 */

/**
 * Exercise:
 * 1) Define a User domain type.
 * 2) Define a generic ApiResponse<T>.
 * 3) Write a function fetchUser(id: number): Promise<ApiResponse<User>>.
 */
// TODO: Uncomment and complete.
// type User = { id: number; email: string };
// type ApiResponse<T> =
//   | { ok: true; data: T }
//   | { ok: false; error: string };
// async function fetchUser(id: number): Promise<ApiResponse<User>> {
//   try {
//     const response = await Promise.resolve({ id, email: "user@example.com" });
//     return { ok: true, data: response };
//   } catch (e) {
//     const message = e instanceof Error ? e.message : "Unknown error";
//     return { ok: false, error: message };
//   }
// }
// fetchUser(1).then(console.log);

export {};
