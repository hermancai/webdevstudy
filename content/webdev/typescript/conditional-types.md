## title

Conditional Types

## question

Conditional Types

## answer

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
