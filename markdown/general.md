**question**

What is object-oriented programming?

**answer**

Object-oriented programming (OOP) is a way to organize code. The code is written as a collection of objects that contain functions and properties. These attributes can be publicly available for other objects to use, or private for internal use. Proper application of OOP can make code easier to maintain, scale, and reuse. Benefits become more apparent as a codebase increases in complexity.

<br/>

The four main principles of OOP are abstraction, encapsulation, inheritance, and polymorphism.

<br/>

OOP can be applied to most coding languages, but support for OOP features can vary. For example, Java, Python, C++, and C# have built-in support to create classes and apply the main OOP principles. JavaScript did not originally support such features, but this has changed in later iterations of the language by including structures such as classes, constructors, and prototype-based inheritance. Languages like C are mainly procedural/functional and do not natively support OOP. While simulating OOP principles is still possible, implementation may be more difficult and conflict with the language's conventions.

**question**

What is abstraction?

**answer**

Abstraction is the process of summarizing a collection of operations. The goal is to expose the collection's essential features while omitting unnecessary information. This reduces complexity and improves readability.

<br/>

Example: "Square" is an abstraction of "rectangle with sides of the same length." In turn, "rectangle" itself is an abstraction of the set of rules that define a rectangle. These rules can expand and result in a complex definition, which abstraction can collapse and simplify.

<br/>

In OOP, classes are used to abstract (define) types of objects. The pseudocode below contains a `Square` class, which can create instances (objects) of the class by using the constructor function.

```code
class Square
    constructor
        Square(length)
    properties
        length
    methods
        getArea()
```

**question**

What is encapsulation?

**answer**

Encapsulation is the process of hiding an object's data from public access. This private data is considered the object's internal state, which cannot be directly modified by external code. Instead, the object can provide public methods to indirectly access the data.

<br/>

Suppose the `Student` class has a `units` property that correlates to the number of completed courses, and at least 60 units are required for graduation. If external code wants to check whether a student can graduate, the code must access the `units` property. However, suppose the graduation requirement changes, and code in multiple places perform that check. The code in all those places will have to be updated. A solution using encapsulation would be to hide the `units` property and expose a `canGraduate()` method instead.

```code
class Student
    constructor
        Student(name)
    properties
        private units
        public name
    methods
        canGraduate() { return this.units >= 60 }
```

With this change, implementation is kept within the class, and external code does not have to worry about the logic behind the requirements.

**question**

What is inheritance?

**answer**

Inheritance is when a class is derived from another class. Suppose there is a `Person` class, which contains a `name` property and `introduceSelf()` method. Suppose there are also the `Teacher` and `Student` classes, which will have their own unique attributes as well as the attributes in `Person`. These classes can be written such that `Teacher` and `Student`, the subclasses, inherit from `Person`, the superclass.

```code
class Person
    constructor
        Person(name)
    properties
        name
    methods
        introduceSelf()

class Teacher extends Person
    constructor
        Teacher(name, subject)
    properties
        subject
    methods
        grade()

class Student extends Person
    constructor
        Student(name, year)
    properties
        year
    methods
        introduceSelf()
```

Notice that `Student` has its own implementation of `introduceSelf()`, which allows a subclass to change the behavior of an inherited method. This process of redefining a method using the same name is called overriding.

<br/>

**question**

What is polymorphism?

**answer**

Polymorphism is the concept where different objects can be treated as the same type.

```code
class Person
    properties
        name
    methods
        introduceSelf() // "My name is {this.name}."

class Teacher extends Person
    properties
        subject
    methods
        introduceSelf() // "My name is {this.name}. I teach {this.subject}."

class Student extends Person
    methods
        introduceSelf() // "My name is {this.name}. I am a student."
```

`Teacher` and `Student` are subclasses that inherit from `Person`. Both subclasses override the `introduceSelf()` method.

```typescript
const people: Person[] = [];

const student = new Student("Joe");
const teacher = new Teacher("Bob");

people.push(student);
people.push(teacher);

for (const person of people) {
    person.introduceSelf();
}
```

In the code above, the for loop treats each object in the array as a `Person` object. During runtime, the unique implementations of `introduceSelf()` in `Student` and `Teacher` will be executed instead of the default implementation in `Person`.

**question**

What is functional programming?

**answer**

Functional programming is a different way to organize code, focusing on mathematical functions and immutability. The following are some key concepts of functional programming:

-   Pure Functions
    -   Given the same input, a pure function will always produce the same output.
    -   There are no side effects such as modifying external variables.
-   Immutability
    -   Data is never modified. If changes need to be made to the data, a new copy is created.
    -   This reduces bugs and simplifies debugging/testing.
-   First-Class and Higher-Order Functions
    -   Functions can be assigned to variables, passed as arguments, and returned by other functions.
-   Recursion
    -   Loops are not used because they involve mutating state during iteration.

Pure functional programming languages include Haskell, Elm, and Clojure. Languages that support functional programming include JavaScript, Python, and Java.

**question**

What is the difference between an abstract class and an interface?

**answer**

Abstract classes and interfaces both serve as blueprints for implementing concrete classes. Differences depend on the programming language. The following are general differences:

<br/>

Abstract Class

-   Can contain both abstract (method signatures without implementation) and concrete (with implementation) methods
-   Single inheritance: A class can only extend one abstract class
-   Can contain constructors to be used by derived classes
-   Useful for sharing code between related classes
    -   Example: Concrete classes `Dog` and `Cat` can be derived from abstract class `Animal`

<br/>

Interface

-   Specifies methods/properties that implementing classes must define
-   Multiple inheritance: A class can implement multiple interfaces
-   Cannot have constructors because they are not part of the inheritance heirarchy
-   Useful for defining a contract between unrelated classes, or implementing multiple interfaces
    -   Example: Concrete classes `Human` and `Tree` can both implement interface `Height`

**question**

What is the difference between composition and inheritance?

**answer**

Composition and inheritance are concepts in object-oriented programming that describe how to structure objects.

<br/>

Composition

-   Combines objects with other objects to create a "has-a" relationship
    -   A `Car` "has-a" `Engine`
    -   Objects are used as properties in a class
-   Allows objects to be swapped during runtime
-   Loose coupling: Implementation of classes do not have to depend on each other.

```code
class Engine
    constructor()
    methods
        start()

class Car
    constructor(engine)
    properties
        engine
    methods
        drive() {
            engine.start()
        }
```

<br/>

Inheritance

-   Creates objects derived from other objects to create an "is-a" relationship
    -   A `Student` "is-a" `Person`
    -   Subclasses inherit the attributes of a superclass
-   The inheritance heirarchy is fixed
-   Tight coupling: Subclasses depend on the superclass.

```code
class Person
    constructor(age)
    properties
        age

class Student extends Person
    constructor(age)
```

In practice, composition is usually preferred over inheritance due to being more flexible and maintainable.
