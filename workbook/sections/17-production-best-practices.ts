/**
 * Module 17: Production Best Practices
 *
 * - Avoid any
 * - Prefer unions over enums
 * - Use as const
 * - Model domains, not APIs
 * - Enable strict
 */

/**
 * Using as const to preserve literal types.
 */
const roles = ["ADMIN", "USER"] as const;
type Role = typeof roles[number];

const role: Role = "ADMIN";
console.log(role);

/**
 * Exercise:
 * Replace any with unknown and narrow it safely.
 */
// TODO: Uncomment and complete.
// let value: unknown = "text";
// if (typeof value === "string") {
//   console.log(value.toUpperCase());
// }

export {};
