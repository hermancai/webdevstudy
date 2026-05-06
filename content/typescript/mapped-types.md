## title

Mapped Types

## question

Mapped Types

## answer

Types can be based on other types. This is useful when properties are not known.

```ts
type IDs = {
    [key: string]: number | string;
};
const people: IDs = {
    bob: 123,
    joe: "abc",
};

// Copy the properties of another type
type CopyType<Type> = {
    [Property in keyof Type]: Type[Property];
};
type CopyIDs = CopyType<IDs>; // [x: string]: string | number
```

`readonly` and `?` modifiers can be added or removed using `+` and `-`.

```ts
type NotOptionalType<T> = {
    [Prop in keyof T]-?: T[Prop];
};

type ReadOnlyType<T> = {
    +readonly [Prop in keyof T]: T[Prop];
};
```

The `as` keyword can be used to modify mapped types.

```ts
type SomeType<T> = {
    [Prop in keyof T as AnotherType]: T[Prop];
};

// Use template literal types to modify key names
type NewType<T> = {
    [Prop in keyof T as `new${Capitalize<string & Prop>}`]: T[Prop];
};
interface Person {
    name: string;
    id: number;
}
type NewPerson = NewType<Person>; // { newName: string; newId: number }

// Filter out a key
type RemoveId<T> = {
    [Prop in keyof T as Exclude<Prop, "id">]: T[Prop];
};
type NoIdPerson = RemoveId<Person>; // { name: string; }
```
