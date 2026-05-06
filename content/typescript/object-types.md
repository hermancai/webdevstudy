## title

Object Types

## question

Object Types

## answer

Object types can be created using object literals, interfaces, or type aliases. Properties can be separated by `,` or `;`. If a property does not have a specified type, it will be assigned `any`.

```ts
function sum(nums: { a: number; b: number }) {
    return a + b;
}

interface Person {
    name: string;
}
```

Optional properties

Use `?` after a property name to denote that property as optional. Accessing a property that does not exist results in `undefined`.

```ts
function printName(first: string, last?: string) {
    console.log(first);
    if (last !== undefined) {
        console.log(last);
    }
}
```

`readonly` properties

The `readonly` modifier can be used signal that a property should not be written to during development. Runtime behavior does not change.

```ts
interface User {
    readonly id: string;
}
```

Index Signatures

A property's value type can be defined even when the property's name is not known ahead of time. In other words, when accessing `obj.someProp` or `obj["someProp"]`, the value can be expected to be a certain type. The allowed types for index signatures include `string`, `number`, `symbol`, template string patterns, and unions of these.

```ts
type Person = {
    [index: string]: string;
    name: string; // this is fine
    age: number; // not allowed because it does not follow index signature
};
```

Interface Extension

Interfaces can use the `extend` keyword to copy properties from existing types. Properties with the same name must have compatible types.

```ts
interface Square {
    length: number;
}

interface Color {
    color: string;
}

interface SquareWithColor extends Square, Color {}

interface BadSquare extends Square {
    length: string; // Error: Types of property 'length' are incompatible.
}
```

Intersection Types

Type aliases and the `&` operator can be used to combine types. Properties with the same name will have their types merged. In other words, the property value must satisfy both defined types.

```ts
interface Student {
    id: string;
}

interface Worker {
    id: string;
    id: string | number; // id can only be a string
    id: number; // id is type 'never'
}

type StudentWorker = Student & Worker;
```
