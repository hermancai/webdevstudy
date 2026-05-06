## title

Literal Types

## question

Literal Types

## answer

String literals and numbers can be used as types.

```ts
let letString = "hello"; // type: string
// Inferred literal type due to using const
const constString = "world"; // type: "world"

// Useful for creating specific unions
const directions = "up" | "down" | "left" | "right";
function getNumber(): 1 | 2 | 3 {
    // ...
}
```

Literal inference works differently with object properties because TypeScript assumes the properties may change.

```ts
// str is typed as a string instead of literal "hello"
const obj = {
    str: "hello",
};

// To enforce a literal type:
// Method 1: explicitly set a literal type
const obj1 = {
    str: "hello" as "hello",
};
// Method 2: as const ensures all object properties have literal types
const obj2 = {
    str: "hello",
} as const;
```
