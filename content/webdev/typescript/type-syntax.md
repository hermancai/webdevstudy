## title

Type Syntax

## question

Type Syntax

## answer

Primitives

All JavaScript primitives are available in TypeScript typing.

```ts
const x: string = "type";
const y: number = 5;
const z: boolean = true;
```

Arrays

`type[]` and `Array<type>` mean the same thing

```ts
const numArr: number[] = [1, 2, 3];
const strArr: Array<string> = ["a", "b", "c"];
```

`any`

`any` can be explicitly assigned to a variable to avoid typechecking that variable. `any` is also assigned to variables that have no specified type and TypeScript cannot infer the type. Use the `noImplicitAny` compiler flag to raise an error for inferred `any`.

```ts
// any
const obj: any = {};
```

Functions

TypeScript can infer return types based on the function's return statement. Explicitly assigning a return type will not change the function's behavior.

```ts
// Parameter and return type annotations
function addTwo(x: number): number {
    return x + 2;
}

// Contextual typing
// TypeScript can infer the arrow function parameter type based on
//   the inferred array type and the forEach function type.
const strArr = ["a", "b", "c"];
strArr.forEach((s) => {
    console.log(typeof s);
});
```
