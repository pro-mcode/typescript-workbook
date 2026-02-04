/**
 * Module 15: Real-World Patterns
 *
 * Focus: API results and domain modeling.
 */

/**
 * A typed API result union.
 */
type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

const okResult: ApiResult<number> = { success: true, data: 42 };
const errorResult: ApiResult<number> = { success: false, error: "Oops" };
console.log(okResult, errorResult);

/**
 * Domain modeling with types.
 */
type Address = {
  street: string;
  city: string;
};

const address: Address = { street: "Main", city: "Lagos" };
console.log(address);

/**
 * Exercise:
 * Create a typed API client response for a User domain.
 */
// TODO: Uncomment and complete.
// type User = { id: number; email: string };
// type UserResponse = ApiResult<User>;
// const userResponse: UserResponse = { success: true, data: { id: 1, email: "a@b.com" } };
// console.log(userResponse);

export {};
