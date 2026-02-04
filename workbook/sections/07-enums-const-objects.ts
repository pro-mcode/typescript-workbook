/**
 * Module 7: Enums vs Const Objects (Best Practice)
 *
 * Enums are convenient but can add runtime code. Const objects with unions
 * are often preferred for smaller bundles and better type inference.
 */

/**
 * Enum example.
 */
enum RoleEnum {
  Admin = "ADMIN",
  User = "USER",
}

const roleEnum: RoleEnum = RoleEnum.Admin;
console.log(roleEnum);

/**
 * Const object alternative (recommended).
 */
const Role = {
  Admin: "ADMIN",
  User: "USER",
} as const;

type Role = typeof Role[keyof typeof Role];

const role: Role = "ADMIN";
console.log(role);

/**
 * Exercise:
 * Convert an enum into a const object + union type.
 */
// TODO: Uncomment and complete.
// const Status = {
//   Draft: "DRAFT",
//   Published: "PUBLISHED",
// } as const;
// type Status = typeof Status[keyof typeof Status];
// const current: Status = "DRAFT";
// console.log(current);

export {};
