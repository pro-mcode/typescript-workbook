# TypeScript Workbook

A guided workbook for learning TypeScript from basics to production patterns.
You can work through the single file or follow the section files in order.

## Learning Path

1. `workbook/sections/01-introduction.ts`
2. `workbook/sections/02-basic-types.ts`
3. `workbook/sections/03-functions.ts`
4. `workbook/sections/04-objects-type-aliases.ts`
5. `workbook/sections/05-interfaces.ts`
6. `workbook/sections/06-union-intersection-types.ts`
7. `workbook/sections/07-enums-const-objects.ts`
8. `workbook/sections/08-generics.ts`
9. `workbook/sections/09-utility-types.ts`
10. `workbook/sections/10-classes.ts`
11. `workbook/sections/11-advanced-types.ts`
12. `workbook/sections/12-type-guards.ts`
13. `workbook/sections/13-modules-config.ts`
14. `workbook/sections/14-error-handling.ts`
15. `workbook/sections/15-real-world-patterns.ts`
16. `workbook/sections/16-testing.ts`
17. `workbook/sections/17-production-best-practices.ts`
18. `workbook/sections/18-capstone-project.ts`

If you prefer a single file, use `workbook/workbook.ts`.

## Run Instructions

You can type-check any file with `tsc` using `npx` (no local setup required):

```sh
npx tsc --noEmit workbook/workbook.ts
```

To run a single topic file:

```sh
npx tsc --noEmit workbook/sections/01-introduction.ts
```

Tip: Uncomment the TODO exercises as you go. Type errors are expected while you are mid-exercise.
