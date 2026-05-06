## title

Classes

## question

Classes

## answer

Classes are templates for creating objects. Each element in a class can have these aspects:

- Kind: getter, setter, method, or field
- Location: static or instance
- Visibility: public or private

Classes have the `constructor` method for initializing objects. Instance properties that depend on the constructor's arguments can be created here.

<br/>

Getters, setters, and methods are defined in the prototype of each instance. `static` methods and fields are defined within the class instead of each instance, so data is not replicated across instances.

<br/>

Class fields are declared without using variable keywords (e.g. `const`). Fields without initial values default to `undefined`. Private fields are prefixed with `#`, and throw an error when accessed outside the class.

<br/>

`extends` is used to inherit from another class. `super()` can be called within the constructor to call the constructor of the super class. `super` can also be used to call methods from the super class.

```js
class Person {
    // Fields
    animal = "mammal";
    #age = 50;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter
    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    // Method
    greet() {
        console.log("Hello,", this.firstName);
    }

    static planet = "Earth";
}

class Employee extends Person {
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }

    greet() {
        super.greet();
    }

    fire() {
        console.log("You're fired,", this.firstName);
    }
}
```
