## title

call(), apply(), bind()

## question

`call()`, `apply()`, `bind()`

## answer

These three methods are available in `Function` instances. They replace the value of `this` for the calling function. This means an object can call a function without having to first attach that function to the object as a property.

<br/>

`call()` is called immediately.

```js
function Person(age) {
    this.age = age;
}

function Man(name) {
    // Syntax: call(newThis, arg1, ..., argN);
    // Execute Person() while using the current 'this'
    Person.call(this, 50);
    this.name = name;
}

console.log(new Man("John")); // { age: 50, name: "John" }
```

`apply()` works the same way as `call()` except function arguments are passed as an array.

```js
const greeting = { phrase: "hello" };

function greet(first, last) {
    console.log(this.phrase, first, last);
}

// func.apply(newThis, [arg1, ..., argN]);
greet.apply(greeting, ["John", "Smith"]); // Output: hello John Smith
```

`bind()` creates a new function, which can be called at another time while maintaining the `this` value provided during binding. Functions can be bound multiple times (these functions keep the `this` value of the first bind call). Bound functions can also have pre-set arguments.

```js
function log(...args) {
    console.log(this, ...args);
}

const boundLog = log.bind({ obj: "one" }, 1, 2);
const boundLog2 = boundLog.bind({ obj: "two" }, 3, 4);
boundLog2(5, 6); // {obj: "one"} 1 2 3 4 5 6
```
