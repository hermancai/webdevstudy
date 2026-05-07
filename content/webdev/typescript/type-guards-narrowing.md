## title

Type Guards & Narrowing

## question

Type Guards & Narrowing

## answer

Type guards are checks on a value's type, which allows TypeScript to perform narrowing. Narrowing is the process of specifying a value's type beyond that value's initial declared type.

<br/>

In JavaScript, the `typeof` operator is used to check a value's type. `typeof` will return a string from the following: `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, `"function"`, `"bigint"`, `"symbol"`. Note that `typeof null === "object"`.

```ts
function printID(id: string | number) {
    if (typeof id === "string") {
        // In this block of code, TypeScript knows for sure that id is a string
    } else {
        // Otherwise, id must be a number
    }
}
```

Values in conditional statements are automatically coerced into booleans. Values can also be manually coerced using `Boolean()` or `!!` double negation (which becomes a literal boolean of true or false in TypeScript).

<br/>

More types of narrowing:

```ts
// truthy/falsy
function print(s: string) {
    if (s) {
        console.log(s);
    } else {
        console.log("empty string");
    }
}

// equality
function equal(x: string | number, y: string | boolean) {
    if (x === y) {
        // x and y must both be strings
    }
}

// "in" operator
type Square = { length: number };
type Circle = { radius: number };
function shape(s: Square | Circle) {
    if ("length" in s) {
        // s must be a Square
    }
}

// "instanceof" operator
function log(s: Date | string) {
    if (s instanceof Date) {
        // instanceof checks the value's prototype chain
    }
}

// assignment
let x = Math.random() > 0.5 ? 1 : "hello"; // number | string;
x = 3; // number
x = "str"; // string
x = true; // error

// control flow analysis
// TypeScript can narrow based on contextual code
let x: string | number | boolean;
x = true; // boolean
if (Math.random() > 0.5) {
    x = "hello"; // string
} else {
    x = 3; // number
}
return x; // string | number. x logically cannot be a boolean

// type predicate functions
// "param is Type" syntax signals a function that returns a boolean
function isString(val: unknown): val is string {
    return typeof val === "string";
}

// assertion functions
function assert(condition: unknown): asserts condition {
    if (!condition) {
        throw new Error("falsy");
    }
}
// OR
function assertIsString(s: unknown): asserts s is string {
    if (typeof s !== "string") {
        throw new Error("not string");
    }
}

function print(s: unknown) {
    assert(typeof s === "string");
    // OR
    assertIsString(s);

    // This line would be an error without asserting
    console.log(s.toUpperCase());
}
```
