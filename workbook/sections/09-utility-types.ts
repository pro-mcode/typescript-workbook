/**
 * Module 9: Utility Types
 *
 * Focus: Partial, Readonly, Pick, Omit.
 */

type User = {
  id: number;
  name: string;
  email: string;
};

/**
 * Partial makes all properties optional.
 */
type PartialUser = Partial<User>;

/**
 * Readonly prevents property reassignment.
 */
type ReadonlyUser = Readonly<User>;

/**
 * Pick selects a subset of properties.
 */
type UserEmail = Pick<User, "email">;

/**
 * Omit removes specified properties.
 */
type UserWithoutId = Omit<User, "id">;

const partial: PartialUser = { name: "Ada" };
const emailOnly: UserEmail = { email: "a@b.com" };
console.log(partial, emailOnly);

/**
 * Exercise:
 * Create an update type using Partial for User.
 */
// TODO: Uncomment and complete.
// type UserUpdate = Partial<User>;
// const update: UserUpdate = { email: "new@example.com" };
// console.log(update);

export {};
