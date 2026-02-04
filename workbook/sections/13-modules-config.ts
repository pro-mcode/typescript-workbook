/**
 * Module 13: Modules and Config
 *
 * This section shows a minimal tsconfig and a config exercise.
 */

/**
 * A minimal tsconfig example (as data, not used by the compiler here).
 */
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
 * Add noImplicitAny to the compilerOptions in a real tsconfig.json.
 */
// TODO: Add "noImplicitAny": true in your tsconfig.json.

export {};
