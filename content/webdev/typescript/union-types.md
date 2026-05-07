## title

Union Types

## question

Union Types

## answer

Union types are used to assign a value as one of multiple possible types. The possible types are called union members.

```ts
function print(val: string | number | boolean) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    } else {
        console.log(val);
    }
}
```

When performing operations on `val`, the operations must be valid for every union member. Since the `toUpperCase` function only exists for string values, the function must be called within code that guarantees `val` is a string. Within the conditional statement checking `typeof val`, TypeScript can narrow the union into a specific type.
