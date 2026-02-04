/**
 * TypeScript Type Annotations Reference
 * 
 * This file demonstrates various TypeScript type annotations and their usage patterns.
 * Type annotations provide explicit type information for variables, functions, parameters,
 * and return values, enabling better code documentation and compile-time type checking.
 * 
 * @see https://www.typescriptlang.org/docs/handbook/2/basic-types.html
 */

// ============ BASIC TYPE ANNOTATIONS ============

/**
 * String type annotation
 * Used for textual data enclosed in single quotes, double quotes, or backticks
 */
let myName: string = "Adedamola Maxwell";
console.log(myName);

/**
 * Number type annotation
 * Supports both integers and floating-point numbers
 * Also supports hexadecimal, decimal, binary, and octal literals
 */
let myAge: number = 20;
console.log(myAge);

/**
 * Boolean type annotation
 * Represents logical values: true or false
 */
let isSingle: boolean = true;
console.log(isSingle);

/**
 * Array type annotations
 * Two syntaxes available: type[] or Array<type>
 */
// Using type[] syntax
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);

// Using Array<type> syntax (generic array type)
let names: Array<string> = ["Alice", "Bob", "Charlie"];
console.log(names);

/**
 * Tuple type annotation
 * Arrays with fixed number of elements where each element has a specific type
 */
let person: [string, number, boolean] = ["John", 30, true];
console.log(person);

/**
 * Enum type annotation
 * A way to give friendly names to sets of numeric values
 */
enum Color {
    Red,
    Green,
    Blue
}
let favoriteColor: Color = Color.Blue;
console.log(favoriteColor);

/**
 * Any type annotation
 * Represents any type, useful when working with existing JavaScript
 * Use sparingly as it disables type checking
 */
let dynamicValue: any = "Could be anything";
dynamicValue = 123; // No type error
console.log(dynamicValue);

/**
 * Unknown type annotation
 * Similar to any but safer - requires type checking before operations
 */
let unknownValue: unknown = "Unknown value";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Safe to use string methods
}

/**
 * Void type annotation
 * Used for functions that don't return a value
 */
function logMessage(message: string): void {
    console.log(message);
}
logMessage("Hello, TypeScript!");

/**
 * Null and Undefined type annotations
 * By default, null and undefined are subtypes of all other types
 */
let nothing: null = null;
let notDefined: undefined = undefined;
console.log(nothing, notDefined);

/**
 * Never type annotation
 * Represents values that never occur, e.g., functions that always throw exceptions
 */
function throwError(message: string): never {
    throw new Error(message);
}

// ============ ADVANCED TYPE ANNOTATIONS ============

/**
 * Object type annotation
 * Defines the shape of an object with specific properties
 */
let user: { name: string; age: number; email: string } = {
    name: "Jane Doe",
    age: 28,
    email: "jane@example.com"
};
console.log(user);

/**
 * Optional properties in object types
 * Use ? to mark properties as optional
 */
interface Person {
    name: string;
    age?: number; // Optional property
    email?: string; // Optional property
}

let person1: Person = { name: "Alice" };
let person2: Person = { name: "Bob", age: 25 };
console.log(person1, person2);

/**
 * Union type annotation
 * Allows a variable to be one of several types
 */
let value: string | number = "Hello";
value = 42; // Valid
console.log(value);

/**
 * Intersection type annotation
 * Combines multiple types into one
 */
interface Employee {
    id: number;
    department: string;
}

interface Manager {
    teamSize: number;
}

let teamLead: Employee & Manager = {
    id: 123,
    department: "Engineering",
    teamSize: 5
};
console.log(teamLead);

/**
 * Type assertions
 * Tell the compiler to treat a value as a specific type
 */
let someValue: unknown = "This is a string";
let strLength: number = (someValue as string).length;
console.log(strLength);

// Alternative syntax for type assertion
let anotherStrLength: number = (<string>someValue).length;
console.log(anotherStrLength);

/**
 * Function type annotations
 * Specify parameter and return types
 */
let add: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
};
console.log(add(5, 3));

/**
 * Generic type annotations
 * Allow types to be parameterized
 */
function identity<T>(arg: T): T {
    return arg;
}

let numResult = identity<number>(42);
let strResult = identity<string>("Hello");
console.log(numResult, strResult);

/**
 * Literal type annotation
 * Specify exact values a variable can have
 */
let direction: "up" | "down" | "left" | "right" = "up";
console.log(direction);

/**
 * Readonly properties
 * Properties that cannot be modified after initialization
 */
interface Config {
    readonly apiKey: string;
    readonly apiUrl: string;
}

let config: Config = {
    apiKey: "abc123",
    apiUrl: "https://api.example.com"
};
console.log(config);
// config.apiKey = "def456"; // Error: Cannot assign to 'apiKey' because it is read-only

/**
 * Type inference
 * TypeScript can infer types when annotations are omitted
 */
let inferredString = "TypeScript infers this is a string";
let inferredNumber = 42;
console.log(inferredString, inferredNumber);
console.log(isSingle);
