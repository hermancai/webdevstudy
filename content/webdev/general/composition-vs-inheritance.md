## title

Composition vs inheritance

## question

Composition vs inheritance

## answer

Composition and inheritance are concepts in object-oriented programming that describe how to structure objects.

<br/>

Composition

- Combines objects with other objects to create a "has-a" relationship
    - A `Car` "has-a" `Engine`
    - Objects are used as properties in a class
- Allows objects to be swapped during runtime
- Loose coupling: Implementation of classes do not have to depend on each other.

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

- Creates objects derived from other objects to create an "is-a" relationship
    - A `Student` "is-a" `Person`
    - Subclasses inherit the attributes of a superclass
- The inheritance heirarchy is fixed
- Tight coupling: Subclasses depend on the superclass.

```code
class Person
    constructor(age)
    properties
        age

class Student extends Person
    constructor(age)
```

In practice, composition is usually preferred over inheritance due to being more flexible and maintainable.
