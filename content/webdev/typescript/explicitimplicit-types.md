## title

Explicit/Implicit Types

## question

Explicit/Implicit Types

## answer

Type annotations are used to describe variables in TypeScript. Manually assigning types is called explicit typing. Implicit, or inferred, typing is when TypeScript can figure out a value's type by itself. In practice, implicit typing is preferred.

```ts
// Explicit typing of the date parameter
function displayDate(date: Date) {
    console.log(`The date is ${date.toDateString()}`);
}

// Implicit typing: TypeScript knows the variable is a string
const str = "hello";
```

Sometimes TypeScript cannot infer a type. In the function above, if the date parameter did not have a type annotation, TypeScript will assign the parameter a type of `any`. This leaves the parameter vulnerable to type errors.

<br/>

TypeScript offers options for how to handle ambiguous types. These options can be managed via the CLI, or in a `tsconfig.json` file. Some options include:

- `strict`: toggle all options regarding type-checking strictness
- `noImplicitAny`: raises an error for variables that are inferred as `any`
- `strictNullChecks`: raises an error for variables that may be `null` or `undefined`, forcing explicit type checking by the user
    - Use `!` to assert that a value will never be `null`/`undefined`. Example: `str!.toUpperCase()`
