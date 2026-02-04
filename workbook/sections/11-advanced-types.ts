/**
 * Module 11: Advanced Types
 *
 * Focus: literal types, mapped types, conditional types.
 */

/**
 * Literal types.
 */
type Method = "GET" | "POST";
const method: Method = "GET";
console.log(method);

/**
 * Mapped types.
 */
type Flags<T> = {
  [K in keyof T]: boolean;
};

type FeatureFlags = Flags<{ darkMode: boolean; beta: boolean }>;
const flags: FeatureFlags = { darkMode: true, beta: false };
console.log(flags);

/**
 * Conditional types.
 */
type IsString<T> = T extends string ? true : false;
const isStr: IsString<"x"> = true;
console.log(isStr);

/**
 * Exercise:
 * Build a mapped type for form validation.
 */
// TODO: Uncomment and complete.
// type Form = { name: string; email: string; age: number };
// type Validation = { [K in keyof Form]: boolean };
// const validation: Validation = { name: true, email: false, age: true };
// console.log(validation);

export {};
