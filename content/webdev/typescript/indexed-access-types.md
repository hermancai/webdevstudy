## title

Indexed Access Types

## question

Indexed Access Types

## answer

Indexed access types are used to get a property's type in another type.

```ts
type Person = {
    name: string;
    age: number;
    alive: boolean;
};
type Name = Person["name"]; // type Name = string

// Union
type T1 = Person["name" | "age"]; // type T1 = string | number

// keyof
type T2 = Person[keyof Person]; // type T2 = string | number | boolean;

// Type alias
type NameAge = "name" | "age";
type T3 = Person[NameAge]; // type T3 = string | number
```

`number` can be used to get the type of elements in an array.

```ts
const PersonArray = [
    { name: "Jane", age: 20 },
    { name: "Jill", age: 25 },
    { name: "John", age: 30 },
];

type Person = {
    name: string;
    age: number;
};
// type Person = { name: string; age: number; }
type Person = (typeof PersonArray)[number];

type Name1 = (typeof PersonArray)[number]["name"]; // type Name = string
type Name2 = Person["age"]; // type Name2 = string
```
