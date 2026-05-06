## title

Encapsulation

## question

Encapsulation

## answer

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
