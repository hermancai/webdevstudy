## title

Object creation

## question

Object creation

## answer

1. Object literal

    ```js
    const person = {
        age: 50,
        name: "John",
    };
    ```

2. Constructor function

    ```js
    function Person(age, name) {
        this.age = age;
        this.name = name;
    }
    const person = new Person(50, "John");
    ```

3. `Object.create()` creates a new object using an existing object as a prototype.

    ```js
    const person = {
        name: "John",
    };

    const me = Object.create(person);
    me.age = 50;
    // me === { name: "John", age: 50 }
    ```

4. ES6 classes

    ```js
    class Person {
        constructor(name) {
            this.name = name;
        }
    }

    const person = new Person("John");
    ```
