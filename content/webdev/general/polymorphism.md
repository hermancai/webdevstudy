## title

Polymorphism

## question

Polymorphism

## answer

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
