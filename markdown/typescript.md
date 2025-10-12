**question**

TypeScript

**answer**

TypeScript is an open-source programming language developed by Microsoft in 2012. Some benefits of TypeScript include:

-   Static typing: Errors are caught at compile time instead of runtime.
-   Type inference: Types are automatically inferred.
-   Tooling: Editors can provide autocompletion, function signatures, and inline documentation.
-   Self-documentation: Types inherently act as documentation for describing code.
-   JavaScript compatibility
    -   TypeScript is a superset of JavaScript, meaning all legal JavaScript syntax is legal in TypeScript.
    -   TypeScript guarantees that JavaScript converted into TypeScript will always behave the same way during runtime.
-   Custom typing: Interfaces and type aliases can be used to model objects.
-   Widespread support: Many modern frameworks and libraries use/support TypeScript.

**question**

TypeScript compiler

**answer**

The TypeScript compiler is a program that converts TypeScript into JavaScript by removing all type information. For example:

```typescript
function greet(name: string, age: number) {
    console.log(`Hello. My name is ${name}. I am ${age}`);
}
```

becomes

```javascript
function greet(name, age) {
    console.log("Hello. My name is ".concat(name, ". I am ").concat(age));
}
```

Notice that the template string in TypeScript is converted to a string using `concat()`. This is because the compiler defaults converting to ES5, an old version of ECMAScript that excludes many newer language features. The language version can be changed using the `target` compiler option.

<br/>

By default, the compiler will always produce create a JavaScript file even if the TypeScript contains errors. This behavior can be changed by using the `noEmitOnError` compiler option.

**question**

Explicit/Implicit Types

**answer**

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

-   `strict`: toggle all options regarding type-checking strictness
-   `noImplicitAny`: raises an error for variables that are inferred as `any`
-   `strictNullChecks`: raises an error for variables that may be `null` or `undefined`, forcing explicit type checking by the user
    -   Use `!` to assert that a value will never be `null`/`undefined`. Example: `str!.toUpperCase()`

**question**

Common Type Syntax

**answer**

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

**question**

Object Types

**answer**

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

**question**

Union Types

**answer**

Union types are used to assign a value as one of multiple possible types. The possible types are called union members.

```ts
function print(val: string | number | boolean) {
    if (typeof val === "string") {
        console.log(val.toUpperCase());
    } else {
        console.log(val);
    }
}
```

When performing operations on `val`, the operations must be valid for every union member. Since the `toUpperCase` function only exists for string values, the function must be called within code that guarantees `val` is a string. Within the conditional statement checking `typeof val`, TypeScript can narrow the union into a specific type.

**question**

Type Aliases and Interfaces

**answer**

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

-   `type` allows more types (e.g. primitives, unions, intersections) while `interface` is for structuring objects
-   `interface`s declared with the same name will be merged. `type`s cannot be changed.
-   `interface` can be extended to add types. `type` must use intersections.
    -   `interface Person extends Animal { name: string; }`
    -   `type Person = Animal & { name: string }`

A common guideline is to use `interface` unless some feature of `type` is necessary.

**question**

Type Assertions

**answer**

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

**question**

Literal Types

**answer**

String literals and numbers can be used as types.

```ts
let letString = "hello"; // type: string
// Inferred literal type due to using const
const constString = "world"; // type: "world"

// Useful for creating specific unions
const directions = "up" | "down" | "left" | "right";
function getNumber(): 1 | 2 | 3 {
    // ...
}
```

Literal inference works differently with object properties because TypeScript assumes the properties may change.

```ts
// str is typed as a string instead of literal "hello"
const obj = {
    str: "hello",
};

// To enforce a literal type:
// Method 1: explicitly set a literal type
const obj1 = {
    str: "hello" as "hello",
};
// Method 2: as const ensures all object properties have literal types
const obj2 = {
    str: "hello",
} as const;
```

**question**

Type Guards & Narrowing

**answer**

Type guards are checks on a value's type, which allows TypeScript to perform narrowing. Narrowing is the process of specifying a value's type beyond that value's initial declared type.

<br/>

In JavaScript, the `typeof` operator is used to check a value's type. `typeof` will return a string from the following: `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, `"function"`, `"bigint"`, `"symbol"`. Note that `typeof null === "object"`.

```ts
function printID(id: string | number) {
    if (typeof id === "string") {
        // In this block of code, TypeScript knows for sure that id is a string
    } else {
        // Otherwise, id must be a number
    }
}
```

Values in conditional statements are automatically coerced into booleans. Values can also be manually coerced using `Boolean()` or `!!` double negation (which becomes a literal boolean of true or false in TypeScript).

<br/>

More types of narrowing:

```ts
// truthy/falsy
function print(s: string) {
    if (s) {
        console.log(s);
    } else {
        console.log("empty string");
    }
}

// equality
function equal(x: string | number, y: string | boolean) {
    if (x === y) {
        // x and y must both be strings
    }
}

// "in" operator
type Square = { length: number };
type Circle = { radius: number };
function shape(s: Square | Circle) {
    if ("length" in s) {
        // s must be a Square
    }
}

// "instanceof" operator
function log(s: Date | string) {
    if (s instanceof Date) {
        // instanceof checks the value's prototype chain
    }
}

// assignment
let x = Math.random() > 0.5 ? 1 : "hello"; // number | string;
x = 3; // number
x = "str"; // string
x = true; // error

// control flow analysis
// TypeScript can narrow based on contextual code
let x: string | number | boolean;
x = true; // boolean
if (Math.random() > 0.5) {
    x = "hello"; // string
} else {
    x = 3; // number
}
return x; // string | number. x logically cannot be a boolean

// type predicate functions
// "param is Type" syntax signals a function that returns a boolean
function isString(val: unknown): val is string {
    return typeof val === "string";
}

// assertion functions
function assert(condition: unknown): asserts condition {
    if (!condition) {
        throw new Error("falsy");
    }
}
// OR
function assertIsString(s: unknown): asserts s is string {
    if (typeof s !== "string") {
        throw new Error("not string");
    }
}

function print(s: unknown) {
    assert(typeof s === "string");
    // OR
    assertIsString(s);

    // This line would be an error without asserting
    console.log(s.toUpperCase());
}
```

**question**

Discriminated Unions

**answer**

```ts
interface Square {
    kind: "square";
    length: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}
```

Discriminated unions are unions where every type contains a shared property with a literal type. Using the interfaces above, `Circle | Square` is a discriminated union because both types contain the `kind` property, which is declared with a string literal. This allows TypeScript to perform narrowing.

```ts
type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        // ...
    }
}

// Or with a switch statement
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        // ...
        case "square":
        //...
    }
}
```

**question**

`never` type

**answer**

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

**question**

Generics

**answer**

Generics are types used to create a relation between two values.

```ts
function identity<Type>(val: Type): Type {
    return val;
}

const output1 = identity<number>(123);
const output2 = identity("hello");
```

In the code above, `<Type>` in angle brackets is a type variable. The variable is used to capture the type of the argument passed into the function. Additionally, the function will return a value of the same type. When calling the function, the type may be inferred or explicitly set.

<br/>

Generic Functions

```ts
function identity<Type>(val: Type): Type {
    return val;
}

// Declaring a generic function type
let func1: <SomeType>(val: SomeType) => SomeType = identity;

// or as a call signature in an object literal
let func2: { <SomeType>(val: SomeType): SomeType } = identity;

// or using an interface
interface GenericFunc {
    <SomeType>(val: SomeType): SomeType;
}
let func3: GenericFunc = identity;

// Note that this interface changes the scope of the type variable
interface DifferentGenericFunc<SomeType> {
    (val: SomeType): SomeType;
}
let func4: DifferentGenericFunc = identity; // ERROR: Missing type argument
```

Generic Classes

```ts
class GenericClass<SomeType> {
    // Properties may need to be initialized, depending on strictness
    val: SomeType;
    func: (x: SomeType, y: SomeType) => SomeType;
}

const c = new GenericClass<number>();
c.val = 5;
c.func = function (x, y) {
    return x + y;
};
```

Generic Constraints

Constraints are useful when the generic type must have a certain property.

```ts
interface HasLength {
    length: number;
}

function log<Type extends HasLength>(val: Type) {
    console.log(val.length);
}

// Type parameter constraint
// The constraint checks that key exists in obj
function getVal<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
}

const coords = { x: 2, y: 3 };
getVal(coords, "x");
getVal(coords, "z"); // Error
```

Generic Factory Functions

Factory functions can be used to dynamically create class instances during runtime when the class is unknown during compile time.

```ts
// The argument type is a constructor signature,
// ensuring the argument is a class
function createInstance<Type>(c: { new (): Type }): Type {
    return new c();
}

class Square {
    length: number = 1;
}

createInstance(Square);
```

Generic Type Parameter Defaults

Defaults can be used to reduce overloading functions.

```ts
function getShape<Type extends Shape = Square>(shape?: Type): Type {
    // ...
}
```

**question**

`keyof`

**answer**

`keyof` creates a union of all keys in an object type.

```ts
type Coords = {
    lat: number;
    lng: number;
};
type C = keyof Coords; // type C = "lat" | "lng"
```

If the object type contains an index signature, `keyof` returns that key type.

```ts
type Obj = { [k: string]: unknown };
type O = keyof Obj; // type O = string | number

type List = { [x: number]: unknown };
type L = keyof List; // type L = number
```

`type O = string | number` because in JavaScript, numeric keys are coerced into strings. `obj[123]` means `obj["123"]`.

`type L = number` instead of `type L = string | number` because TypeScript distinguishes numeric index signatures for type checking. Object behavior will not change during JavaScript runtime.

**question**

`typeof`

**answer**

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

**question**

Indexed Access Types

**answer**

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

**question**

Conditional Types

**answer**

Types can be conditionally assigned.

```ts
interface Person {
    name: string;
}

interface Student extends Person {
    id: number;
}

type T1 = Student extends Person ? string : number; // type T1 = string
type T2 = Date extends Person ? string : number; // type T2 = number
```

Conditional types can be used to reduce function overloads.

```ts
interface Name {
    name: string;
}
interface Id {
    id: number;
}
type NameOrId<Type extends string | number> = Type extends string ? Name : Id;

function returnObj<Type extends string | number>(val: Type): NameOrId<Type> {
    if (typeof val === "string") {
        return { name: val } as NameOrId<Type>;
    } else {
        return { id: val } as NameOrId<Type>;
    }
}

let Obj1 = returnObj("hello"); // let Obj1 = Name
let Obj2 = returnObj(3); // let Obj2 = Id
```

The `infer` keyword is used to infer types.

```ts
// Without using infer
type GetListType<T> = T extends any[] ? T[number] : T;
type T1 = GetListType<string[]>; // type T1 = string
type T2 = GetListType<boolean>; // type T2 = boolean

// Using infer
type InferListType<T> = T extends Array[infer Element] ? Element : T;

type InferReturn<T> = T extends (...args: any) => infer Return ? Return : T;
function func() {
    return 1;
}
type T3 = InferReturn<typeof func>; // type T3 = number
```

Conditional generic types are distributive for union types.

```ts
type ToArray<T> = T extends any ? T[] : never;
type StrOrNumArray = ToArray<string | number>; // type StrOrNumArray = string[] | number[]

// To prevent the default distributive behavior,
// place square brackets on both sides of the extends keyword
type NoDistArray<T> = [T] extends [any] ? T[] : never;
type StrNumArray = NoDistArray<string | number>; // type StrNumArray = (string | number)[]
```

**question**

Template Literal Types

**answer**

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

**question**

Mapped Types

**answer**

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

**question**

Classes

**answer**

```ts
class Person {
    // Fields can be typed and initialized
    // Class members are public by default
    public name: string;
    readonly age: number = 0;

    // Protected members can only by accessed within the class and subclasses
    // Protected status can be changed in subclasses
    protected greet() {
        return "hello";
    }

    // Private members can only be accessed within the class and across instances
    private id: string;

    // Static members are not associated with particular class instances.
    // Static members are accessed through the class itself (e.g. Person.planet)
    public static planet: string;
    static {
        // Static blocks have their own scope and can access private members
        // This is useful for executing one-time code and initializing static data
    }

    // Only one implementation allowed. Must be compatible with all overloads
    constructor(name: string);
    constructor(name: string, id: string = "1a2b") {
        this.name = name;
        this.id = id;
    }
}

// Class properties can also be extracted from the constructor parameters
// by including visibility modifiers
class Point {
    constructor(
        public readonly x: number,
        protected y: number,
        private z: number
    ) {}
}

// Classes can be anonymous and defined in expressions
const myClass = class<Type> {
    data: Type;
    constructor(val: Type) {
        this.data = val;
    }
};
```

`protected` and `private` members are only enforced during type checking. These members can be accessed normally during JavaScript runtime. Bracket notation can also be used to access private members in TypeScript (e.g. `obj["key"]`). To ensure privacy during runtime, use JavaScript private fields (`#`).

<br/>

`declare` can be used in a subclass to overwrite an inherited field's type.

```ts
interface Shape {
    name: string;
}

interface Circle extends Shape {
    radius: number;
}

class ShapeContainer {
    shape: Shape;
    constructor(shape: Shape) {
        this.shape = shape;
    }
}

class CircleContainer extends ShapeContainer {
    // Ensures a more specific type.
    // This line is removed during compilation.
    declare shape: Circle;
    constructor(circle: Circle) {
        super(circle);
    }
}
```

If a class `implements` an interface, TypeScript will check if that class has the same shape as the interface. This does not necessarily mean the class is a child of the interface.

```ts
interface Person {
    greet(name: string): string;
}

class Employee implements Person {
    id: number = 0;
    greet(name: string) {
        return "hello " + name;
    }
}

class Worker implements Person {
    // Error: Class 'Worker' incorrectly implements interface 'Person'.
}
```

`abstract` classes can serve as a blueprint and provide members to be implemented by concrete subclasses.

```ts
// The Person class cannot be instantiated by itself
abstract class Person {
    abstract getName(): string;
}

// concrete subclass
class Employee extends Person {
    getName() {
        return "joe";
    }
}

// To work with subclasses while avoiding the abstract class,
// use a construct signature instead of referring to the class type
function greetWrong(c: typeof Person) {
    const obj = new c(); // Error: Cannot create an instance of an abstract class
}

function greet(c: new () => Person) {
    const obj = new c();
}

greet(Employee);
greet(Person); // Error: Person has an abstract constructor type
```

Generic Classes

```ts
class Wrapper<Type> {
    data: Type;

    // Static members cannot reference a generic type because
    // there is only one instance of the static member at runtime
    static StaticData: Type; // ERROR

    constructor(val: Type) {
        this.data = val;
    }
}
```

In TypeScript, `this` can be used as the first parameter in a function. This will perform a check to ensure that the function is called in the intended context. During compilation, the `this` parameter will be removed.

```ts
class Person {
    name = "joe";
    getName(this: Person) {
        return this.name;
    }
}

const p = new Person();
const func = p.getName;
func(); // Error
p.getName(); // No error
```

`this` can also dynamically refer to classes.

```ts
class ParentClass {
    getClass() {
        return this;
    }
}

class ChildClass extends ParentClass {}

const parent = new ParentClass();
const child = new ChildClass();
parent.getClass(); // ParentClass
child.getClass(); // ChildClass
```

`this` type guarding and narrowing

```ts
class Shape {
    isSquare(): this is Square {
        return this instanceof Square;
    }
    isCircle(): this is Circle {
        return this instanceof Circle;
    }
}

class Square extends Shape {
    length: number = 3;
}
class Circle extends Shape {
    radius: number = 2;
}

const shape: Shape = new Square();
if (shape.isSquare()) {
    shape.length;
} else if (shape.isCircle()) {
    shape.radius;
}
```
