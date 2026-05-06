## title

Classes

## question

Classes

## answer

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
        private z: number,
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
