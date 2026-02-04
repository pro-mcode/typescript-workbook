/**
 * TypeScript Workbook (All-in-One)
 *
 * This file combines all modules into a single workbook.
 * Uncomment exercises as you progress.
 */

// ============ MODULE 1: INTRODUCTION ============

/**
 * A typed string variable and a console log.
 */
const message: string = "Hello TypeScript";
console.log(message);

/**
 * Exercise:
 * Create a `greeting` string and log it.
 */
// TODO: Uncomment and complete.
// const greeting: string = "";
// console.log(greeting);

// ============ MODULE 2: BASIC TYPES ============

let isActive: boolean = true;
let age: number = 25;
let username: string = "Max";
console.log(isActive, age, username);

let scores: number[] = [10, 20, 30];
let names: Array<string> = ["Alice", "Bob"];
console.log(scores, names);

let user: [number, string] = [1, "Admin"];
console.log(user);

let value: any = 10;
let safeValue: unknown = "hello";
console.log(value, safeValue);

/**
 * Exercise:
 * 1) Create an array of numbers.
 * 2) Create a tuple representing [id, email].
 */
// TODO: Uncomment and complete.
// const ids: number[] = [1, 2, 3];
// const userTuple: [number, string] = [1, "user@example.com"];
// console.log(ids, userTuple);

// ============ MODULE 3: FUNCTIONS ============

function add(a: number, b: number): number {
  return a + b;
}
console.log(add(2, 3));

const multiply = (a: number, b: number): number => a * b;
console.log(multiply(3, 4));

function greet(name: string, title?: string): string {
  return `Hello ${title ?? ""} ${name}`.trim();
}
console.log(greet("Ava"));
console.log(greet("Ava", "Dr."));

function logMessage(msg: string): void {
  console.log(msg);
}

function throwError(): never {
  throw new Error("Crash");
}

logMessage("Typed functions are great.");

/**
 * Exercise:
 * Write a function that returns a user object with id and name.
 */
// TODO: Uncomment and complete.
// function createUser(id: number, name: string): { id: number; name: string } {
//   return { id, name };
// }
// console.log(createUser(1, "Max"));

// ============ MODULE 4: OBJECTS AND TYPE ALIASES ============

const userObj: { id: number; name: string } = { id: 1, name: "Max" };
console.log(userObj);

type UserAlias = {
  id: number;
  name: string;
  isAdmin?: boolean;
};

const admin: UserAlias = { id: 2, name: "Ada", isAdmin: true };
console.log(admin);

type Config = { readonly apiKey: string };
const config: Config = { apiKey: "key-123" };
console.log(config);

/**
 * Exercise:
 * Define a Product type with optional fields.
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

// ============ MODULE 5: INTERFACES ============

interface User {
  id: number;
  email: string;
}

const userInterface: User = { id: 1, email: "user@example.com" };
console.log(userInterface);

interface Admin extends User {
  role: string;
}

const adminInterface: Admin = {
  id: 2,
  email: "admin@example.com",
  role: "super",
};
console.log(adminInterface);

/**
 * Exercise:
 * Create an interface for Wallet.
 */
// TODO: Uncomment and complete.
// interface Wallet {
//   address: string;
//   balance: number;
// }
// const wallet: Wallet = { address: "0xabc", balance: 10 };
// console.log(wallet);

// ============ MODULE 6: UNION AND INTERSECTION TYPES ============

type Status = "pending" | "success" | "failed";
const status: Status = "pending";
console.log(status);

function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(0));
  }
}
printId("abc");
printId(123);

type A = { a: number };
type B = { b: string };
type C = A & B;
const combined: C = { a: 1, b: "two" };
console.log(combined);

/**
 * Exercise:
 * Create a union for API response states.
 */
// TODO: Uncomment and complete.
// type ApiState = "idle" | "loading" | "error" | "success";
// const currentState: ApiState = "idle";
// console.log(currentState);

// ============ MODULE 7: ENUMS VS CONST OBJECTS ============

enum RoleEnum {
  Admin = "ADMIN",
  User = "USER",
}

const roleEnum: RoleEnum = RoleEnum.Admin;
console.log(roleEnum);

const Roles = { Admin: "ADMIN", User: "USER" } as const;

type Rolee = (typeof Roles)[keyof typeof Roles];
const role: Rolee = "ADMIN";
console.log(role);

/**
 * Exercise:
 * Convert an enum into a const object + union type.
 */
// TODO: Uncomment and complete.
// const Status = { Draft: "DRAFT", Published: "PUBLISHED" } as const;
// type Status = typeof Status[keyof typeof Status];
// const current: Status = "DRAFT";
// console.log(current);

// ============ MODULE 8: GENERICS ============

function identity<T>(value: T): T {
  return value;
}
console.log(identity(123));
console.log(identity("hello"));

interface ApiResponse<T> {
  data: T;
  error?: string;
}

const response: ApiResponse<string> = { data: "ok" };
console.log(response);

function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}
logLength("length");
logLength([1, 2, 3]);

/**
 * Exercise:
 * Build a generic Result<T> type.
 */
// TODO: Uncomment and complete.
// type Result<T> =
//   | { ok: true; value: T }
//   | { ok: false; error: string };
// const ok: Result<number> = { ok: true, value: 42 };
// const bad: Result<number> = { ok: false, error: "Oops" };
// console.log(ok, bad);

// ============ MODULE 9: UTILITY TYPES ============

type UserUtil = { id: number; name: string; email: string };

type PartialUser = Partial<UserUtil>;
type ReadonlyUser = Readonly<UserUtil>;
type UserEmail = Pick<UserUtil, "email">;
type UserWithoutId = Omit<UserUtil, "id">;

const partial: PartialUser = { name: "Ada" };
const emailOnly: UserEmail = { email: "a@b.com" };
console.log(partial, emailOnly);

/**
 * Exercise:
 * Create an update type using Partial for User.
 */
// TODO: Uncomment and complete.
// type UserUpdate = Partial<UserUtil>;
// const update: UserUpdate = { email: "new@example.com" };
// console.log(update);

// ============ MODULE 10: CLASSES ============

class Wallet {
  private balance: number;

  constructor(balance: number) {
    this.balance = balance;
  }

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}

const wallet = new Wallet(100);
wallet.deposit(50);
console.log(wallet.getBalance());

/**
 * Exercise:
 * Create a class with readonly properties.
 */
// TODO: Uncomment and complete.
// class Profile {
//   readonly id: string;
//   readonly email: string;
//
//   constructor(id: string, email: string) {
//     this.id = id;
//     this.email = email;
//   }
// }
// const profile = new Profile("p1", "p1@example.com");
// console.log(profile);

// ============ MODULE 11: ADVANCED TYPES ============

type Method = "GET" | "POST";
const method: Method = "GET";
console.log(method);

type Flags<T> = { [K in keyof T]: boolean };

type FeatureFlags = Flags<{ darkMode: boolean; beta: boolean }>;
const flags: FeatureFlags = { darkMode: true, beta: false };
console.log(flags);

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

// ============ MODULE 12: TYPE GUARDS ============

function isString(value: unknown): value is string {
  return typeof value === "string";
}

const maybeValue: unknown = "hello";
if (isString(maybeValue)) {
  console.log(maybeValue.toUpperCase());
}

/**
 * Exercise:
 * Create a guard for User.
 */
// TODO: Uncomment and complete.
// type GuardUser = { id: number; email: string };
// function isUser(value: unknown): value is GuardUser {
//   return (
//     typeof value === "object" &&
//     value !== null &&
//     "id" in value &&
//     "email" in value
//   );
// }
// const maybeUser: unknown = { id: 1, email: "a@b.com" };
// if (isUser(maybeUser)) {
//   console.log(maybeUser.email);
// }

// ============ MODULE 13: MODULES AND CONFIG ============

const tsconfigExample = {
  compilerOptions: {
    target: "ES2020",
    strict: true,
    module: "ESNext",
  },
} as const;

console.log(tsconfigExample);

/**
 * Exercise:
 * Enable noImplicitAny in your tsconfig.json.
 */
// TODO: Add "noImplicitAny": true in your tsconfig.json.

// ============ MODULE 14: ERROR HANDLING ============

try {
  throw new Error("Failed");
} catch (e) {
  if (e instanceof Error) {
    console.error(e.message);
  }
}

/**
 * Exercise:
 * Wrap JSON.parse in try/catch and return a safe result type.
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

// ============ MODULE 15: REAL-WORLD PATTERNS ============

type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };

const okResult: ApiResult<number> = { success: true, data: 42 };
const errorResult: ApiResult<number> = { success: false, error: "Oops" };
console.log(okResult, errorResult);

type Address = { street: string; city: string };
const address: Address = { street: "Main", city: "Lagos" };
console.log(address);

/**
 * Exercise:
 * Create a typed API client response for a User domain.
 */
// TODO: Uncomment and complete.
// type DomainUser = { id: number; email: string };
// type UserResponse = ApiResult<DomainUser>;
// const userResponse: UserResponse = { success: true, data: { id: 1, email: "a@b.com" } };
// console.log(userResponse);

// ============ MODULE 16: TESTING WITH TYPESCRIPT ============

function addForTest(a: number, b: number): number {
  return a + b;
}

console.log(addForTest(2, 3));

/**
 * Example assertion (framework required).
 * expect(addForTest(2, 3)).toBe(5);
 */

/**
 * Exercise:
 * Create a test file and assert addForTest(2, 3) === 5.
 */
// TODO: Write a unit test in your chosen test framework.

// ============ MODULE 17: PRODUCTION BEST PRACTICES ============

const roles = ["ADMIN", "USER"] as const;
type Role = (typeof roles)[number];
const roleValue: Role = "ADMIN";
console.log(roleValue);

/**
 * Exercise:
 * Replace any with unknown and narrow it safely.
 */
// TODO: Uncomment and complete.
// let unknownValue: unknown = "text";
// if (typeof unknownValue === "string") {
//   console.log(unknownValue.toUpperCase());
// }

// ============ FINAL CAPSTONE PROJECT ============

/**
 * Exercise:
 * 1) Define a User domain type.
 * 2) Define a generic ApiResponse<T>.
 * 3) Write fetchUser(id) that returns Promise<ApiResponse<User>>.
 */
// TODO: Uncomment and complete.
// type CapstoneUser = { id: number; email: string };
// type CapstoneResponse<T> =
//   | { ok: true; data: T }
//   | { ok: false; error: string };
// async function fetchUser(id: number): Promise<CapstoneResponse<CapstoneUser>> {
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
