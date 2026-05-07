## title

Abstract class vs interface

## question

Abstract class vs interface

## answer

Abstract classes and interfaces both serve as blueprints for implementing concrete classes. Differences depend on the programming language. The following are general differences:

<br/>

Abstract Class

- Can contain both abstract (method signatures without implementation) and concrete (with implementation) methods
- Single inheritance: A class can only extend one abstract class
- Can contain constructors to be used by derived classes
- Useful for sharing code between related classes
    - Example: Concrete classes `Dog` and `Cat` can be derived from abstract class `Animal`

<br/>

Interface

- Specifies methods/properties that implementing classes must define
- Multiple inheritance: A class can implement multiple interfaces
- Cannot have constructors because they are not part of the inheritance heirarchy
- Useful for defining a contract between unrelated classes, or implementing multiple interfaces
    - Example: Concrete classes `Human` and `Tree` can both implement interface `Height`
