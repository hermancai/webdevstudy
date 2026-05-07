## title

Inheritance

## question

Inheritance

## answer

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
