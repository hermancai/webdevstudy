## title

typeof

## question

`typeof`

## answer

JavaScript contains a `typeof` operator, which returns one of the following: `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, `"function"`, `"bigint"`, `"symbol"`.

```js
console.log(typeof 123); // number
```

TypeScript includes another `typeof` operator, which can be used to refer to the type of a variable or property.

```ts
let val = "hello";
let type: typeof val; // let type: string
```

`ReturnType<T>` is a built-in operator which takes a function type and refers to the return type.

```ts
type FuncType = (val: unknown) => string;
type X = ReturnType<FuncType>; // type X = string

// OR using a function name
function func(val: unknown): number {
    return 1;
}
type Y = ReturnType<typeof func>; // type Y = number
```
