## title

Type Assertions

## question

Type Assertions

## answer

Type assertions are used to manually coerce a value's type. This is useful when TypeScript is unable to infer the desired type.

```ts
// getElementById() returns HTMLElement, which is not specific enough
const button = document.getElementById("my-button") as HTMLButtonElement;

// This syntax is also valid, unless in a .tsx file
const button = <HTMLButtonElement>document.getElementById("my-button");
```

Type assertions can be used to make a type more or less specific. However, some type conversions may be invalid if the types are too different. A workaround is to use two assertions.

```ts
// This assertion results in an error
const str = "string" as number;

// First cast as any or unknown
const str = "string" as any as number;
```
