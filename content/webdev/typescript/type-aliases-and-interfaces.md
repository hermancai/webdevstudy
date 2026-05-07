## title

Type Aliases and Interfaces

## question

Type Aliases and Interfaces

## answer

Type aliases are names for types that may be used more than once. Aliases simply refer to a defined type and do not create a new version of that type, as illustrated in the code below.

```ts
// Examples
type FullName = {
    first: string;
    last: string;
};
type ID = string | number;
type Name = string;

// The variable is initially typed as a Name, then assigned a string literal.
// This is fine because the Name alias just refers to a string type.
let name: Name = "Joe";
name = "Bob";
```

Interfaces are another way to name object types. Like type aliases, an interface name is simply a reference to the type.

```ts
interface FullName {
    first: string;
    last: string;
}
```

Differences between `type` and `interface`

- `type` allows more types (e.g. primitives, unions, intersections) while `interface` is for structuring objects
- `interface`s declared with the same name will be merged. `type`s cannot be changed.
- `interface` can be extended to add types. `type` must use intersections.
    - `interface Person extends Animal { name: string; }`
    - `type Person = Animal & { name: string }`

A common guideline is to use `interface` unless some feature of `type` is necessary.
