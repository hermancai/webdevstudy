## title

Template Literal Types

## question

Template Literal Types

## answer

Template literal types are similar to JavaScript template strings, and can be used to create string literal types.

```ts
type World = "world";
type Greeting = `hello ${World}`; // type Greeting = "hello world"

// Unions
type Odd = 1 | 3;
type Even = 2 | 4;
type Nums = `num${Odd | Even}`; // type Nums = "num1" | "num3" | "num2" | "num4"
type Char = "a" | "b" | "c";
type OddChar = `${Odd}${Char}`; // type OddChar = "1a" | "1b" | "1c" | "3a" | "3b" | "3c"
```

Template literals can add constraints to property names.

```ts
type Person = {
    firstName: string;
    lastName: string;
};

type IncludeSuffix<T> = {
    func(param: `${string & keyof T}Suffix`): void;
};

type PersonSuffix = IncludeSuffix<Person>;
// type PersonSuffix = { func(param: "firstNameSuffix" | "lastNameSuffix"): void; }
// func() will only accept strings from the generated union
```

TypeScript includes built-in types for modifying strings.

```ts
// Uppercase<> affects all characters
type Hello = "hello";
type UpperHello = Uppercase<Hello>; // type UpperHello = "HELLO"

// Lowercase<> affects all characters
type World = "WORLD";
type LowerWorld = Lowercase<World>; // type LowerWorld = "world"

// Capitalize<> affects the first character
type Name = "joe";
type CapName = Capitalize<Name>; // type CapName = "Joe"

// Uncapitalize<> affects the first character
type Greet = "Hello WORLD";
type UncapShape = Uncapitalize<Greet>; // type UncapShape = "hello WORLD"
```
