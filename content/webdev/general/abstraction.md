## title

Abstraction

## question

Abstraction

## answer

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
