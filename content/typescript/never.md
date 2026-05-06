## title

never

## question

`never`

## answer

`never` represents a type that will not occur. `never` can be assigned to any type, while no type can be assigned to `never` except `never` itself.

<br/>

If a function's return type is `never`, the function will not return.

```ts
function func(): never {
    // This is not allowed.
    return "hello"; // Error: Type '"hello"' is not assignable to type 'never'.

    // This line must exist or else the function will return normally.
    throw new Error();
}

function func2(): never {
    while (true) {
        // ...
    }
}
```

`never` can also be used to ensure handling of every type in a union.

```ts
function print(val: string | number) {
    if (typeof val === "string") {
        // ...
    } else if (typeof val === "number") {
        // ...
    } else {
        const shouldNotHappen: never = val; // val has type 'never'
        const valType = typeof val;
    }
}

function print1(val: string | number | boolean) {
    if (typeof val === "string") {
        // ...
    } else if (typeof val === "number") {
        // ...
    } else {
        // In this block, val is narrowed to be a boolean.
        // Error: Type 'boolean' is not assignable to type 'never'.
        const shouldNotHappen: never = val;
    }
}
```

In the example above, note that `valType` has the standard `typeof` return type. This is due to TypeScript's type-checking strictness. During JavaScript runtime, there is no guarantee that only values of expected types will be passed into the function.
