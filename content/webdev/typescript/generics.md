## title

Generics

## question

Generics

## answer

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
