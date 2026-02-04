/**
 * Module 4: Objects and Type Aliases
 *
 * Focus: object types, type aliases, and readonly properties.
 */

/**
 * Inline object type annotation.
 */
const user: { id: number; name: string } = {
  id: 1,
  name: "Max",
};
console.log(user);

/**
 * Type aliases allow reuse and cleaner signatures.
 */
type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

const admin: User = { id: 2, name: "Ada", isAdmin: true };
console.log(admin);

/**
 * Readonly prevents reassignment.
 */
type Config = {
  readonly apiKey: string;
};

const config: Config = { apiKey: "key-123" };
console.log(config);

/**
 * Exercise:
 * Define a Product type with optional fields (e.g., description, discount).
 */
// TODO: Uncomment and complete.
// type Product = {
//   id: string;
//   name: string;
//   price: number;
//   description?: string;
//   discountPercent?: number;
// };
// const product: Product = { id: "p1", name: "Laptop", price: 999 };
// console.log(product);

export {};
