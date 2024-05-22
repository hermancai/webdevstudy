**question**

What are the primitive data types?

**answer**

1. **string** - Sequences of characters representing text
2. **number** - Stored as doubles (64-bit double-precision floating point)
3. **bigint** - Can store numbers beyond `Number`'s range in arbitrary precision format. Not strictly equal to a `Number` of the same mathematical value.
4. **boolean** -`true` or `false`
5. **undefined** - Contains one value: `undefined`. A variable is undefined when it has been declared but not yet assigned a value.
6. **null** - Contains one value: `null`. Can be assigned to a variable as a representation of no value. Can be considered as a placeholder for an object. `typeof null === "object"`
7. **symbol** - Guaranteed unique values meant to be Object property keys

Primitives are immutable.

**question**

What is the Object data type?

**answer**

An object is the only mutable data type in JavaScript. It can be seen as a collection of two types of properties. All properties contain the attributes `enumerable` (boolean of whether the property can be enumerated in a for loop) and `configurable` (boolean of whether the property can be deleted, change property type, or change attributes).

<br/>

**Data property**: Key-value pairs. Keys are Strings or Symbols. Values can be any type. Data properties contain the attribute `writable`, a boolean of whether the property can be changed with assignment.

<br/>

**Accessor property**: Contains `get` and `set` functions, which will be called when the property is read.

```js
const user = {
    first: "John",
    last: "Smith"

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    set fullName(value) {
        [this.first, this.last] = value.split(" ");
    }
}

console.log(user.fullName);  // Output: John Smith
user.fullName = "Joe Bob";  // first == "Joe"; last == "Bob"
```

**question**

How can an object be created?

**answer**

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

**question**

How can an object be cloned?

**answer**

1. `Object.assign()` moves all enumerable own properties from a target to a source. Warning: If a value is a reference to an object, only the reference is copied. This means if the referenced object changes, the source and target are both affected.

    ```js
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }
    ```

2. Spread operator. Performs a shallow copy similar to `Object.assign()`.

    ```js
    const source = { val: 1 };
    const clone = { ...source };
    ```

3. `structuredClone()` performs a deep clone instead of copying references.

**question**

What is a prototype?

**answer**

Every object in JavaScript has a built-in property called its prototype. The prototype itself is an object. This creates a prototype chain, which ends when the prototype value is `null`.

<br/>

All browsers use `__proto__` to point to an object's prototype. `Object.getPrototypeOf()` is the standard way to access a prototype. `Object.prototype` is the object that serves as the most basic prototype, which all objects have by default. This prototype itself contains a prototype of `null`, which ends the prototype chain.

```js
const date = new Date();
console.log(Object.getPrototypeOf(date)); // Date.prototype
console.log(Object.getPrototypeOf(date.__proto__)); // Object
console.log(Object.getPrototypeOf(date.__proto__.__proto__)); // null
```

When accessing an object property, the prototype chain will be traversed until the property is found, starting with the initial object. If the property cannot be found, `undefined` is returned.

**question**

What is the difference between prototype properties and instance properties?

**answer**

All objects created by one constructor function share the same prototype properties. Changing one object's instance property will not affect another object.

```js
class Integer {
    constructor(value) {
        this.value = value;
    }

    // Methods are stored in the class's prototype
    getValue() {
        return this.value;
    }
}
Integer.prototype.randomVal = 5; // Adding prototype property

const x = new Integer(1);
const y = new Integer(1);

x.value = 2; // Changing instance property
x.__proto__.randomVal = 4; // Changing prototype property
console.log(x.value, x.randomVal); // 2 4
console.log(y.value, y.randomVal); // 1 4
```

**question**

What functions can check if a value exists in an array?

**answer**

-   `includes()` returns true if the value exists
-   `find()` returns the value that passes the callback
-   `some()` returns true if at least one value passes the callback
-   `indexOf()` returns the first index of the found value or -1

**question**

What is the difference between `var`, `let`, and `const`?

**answer**

`var`

-   Global scope when declared outside a function. Function scope otherwise
-   Can be re-declared and updated
-   Gets hoisted to the top of its scope and initialized with `undefined`

`let`

-   Block scope (i.e. any code bound by braces { }). This means variable names can be reused in different scopes without affecting other variables with the same name
-   Can be updated but not re-declared
-   Gets hoisted to the top of its scope but is not initialized with a value

`const`

-   Block scope
-   Cannot be re-declared or updated. This means initialization must happen during declaration.
-   Gets hoisted to the top of its scope but is not initialized with a value

`var` always existed in JavaScript. `let` and `const` were introduced in ES6 (2015). A common guideline in modern JavaScript is to never use `var`, and always use `const` unless `let` is required.

**question**

What is the difference between declaring and initializing?

**answer**

```js
let x; // Declare
x = 5; // Initialize
let y = 10; // Declare AND initialize
```

**question**

Explain the three types of scope.

**answer**

Global

-   Any variable declared outside a function has global scope.
-   Global variables can be accessed from anywhere.
-   Any variable that has been assigned a value but has not been declared becomes global.

Function

-   Each function has its own scope.
-   Variables declared in a function are not accessible outside the function.

Block

-   Each block of code surrounded by braces { } has its own scope.
-   Variables declared in a { } block are not accessible outside the block, except for `var` variables.

**question**

What is hoisting?

**answer**

Declarations are moved to the top of their respective scopes.

<br/>

Variables declared with `var` can have value assignments before the declaration. However, initialization is not hoisted. Hoisted `var` variables are immediately assigned a value of `undefined`.

```js
x = 2;
var x;
console.log(x, y); // Output: 2 undefined
var y = 3;
```

Variables declared with `let` and `const` are also hoisted. Accessing a `let` or `const` variable before declaration results in a `ReferenceError`. The range of code where access results in this error is called a temporal dead zone.

```js
console.log(x); // ReferenceError
let x = 5;

console.log(y); // ReferenceError
const y = 5;
```

NOTE: If a `let` variable is declared without initialization during runtime when the line of code is executed, the variable will be assigned `undefined`. This is a different scenario from when the variable gets hoisted without being assigned a value.

```js
let x;
console.log(x); // Output: undefined
```

`const` variables must be initialized during declaration.

```js
const y;  // SyntaxError
```

**question**

What is a Temporal Dead Zone?

**answer**

Variable declarations get hoisted in JavaScript. Initialization is not hoisted. If a `let` or `const` variable is accessed before the declaration line of code at runtime, a `ReferenceError` will occur. The range in code from the start of the variable's scope to the line of declaration is a temporal dead zone. `var` variables do not have a temporal dead zone because they are hoisted and immediately initialized with a value of `undefined`.

```js
{
    // Start of temporal dead zone for x
    console.log(x); // ReferenceError
    console.log(y); // undefined

    let x = 1; // End of temporal dead zone for x
    var y = 2;
}
```

**question**

What is closure?

**answer**

A closure is the combination of a function and the lexical environment that the function was declared in. The lexical environment consists of any available in-scope variables at the time the closure was created.

```js
function createFunc() {
    const x = 5;

    // When this function is created, it has a closure
    // that contains variable x, which remains available
    // even after createFunc() returns
    function add(val) {
        return x + val;
    }
    return add;
}

const func = createFunc();
console.log(func(2)); // 7
```

Every closure has three scopes: local, enclosing (block, function, or module scope), and global.

```js
// Closure of the inner most function:
// Global scope
const d = 10;
function sum(a) {
    return function (b) {
        // Enclosing scopes
        return function (c) {
            // Local scope
            return a + b + c + d;
        };
    };
}

console.log(sum(1)(2)(3)); // 16
```

**question**

What is an event object?

**answer**

On the browser, HTML elements may have event listeners attached. When an event happens, an event object is automatically passed to the event handler function. This object represents the event and provides properties/methods for managing the event.

```js
function handleEvent(event) {
    event.preventDefault();
    event.target.style.backgroundColor = "blue";
}

someElement.addEventLister("click", handleEvent);
```

**question**

What is event bubbling and event capturing?

**answer**

Event bubbling is how a browser handles events in nested elements.

```html
<div id="container">
    <button>Click<button>
</div>
```

```js
const container = document.getElementById("container");
container.addEventListener("click", (event) => {
    console.log("Clicked on container");
});
```

Upon clicking the button, a click event will trigger for both elements, starting with the inner most element (the button) and "bubbling" outwards.

<br/>

Event capturing is the opposite behavior of event bubbling, so events will trigger from the least nested element and move inwards to the most nested. Event capturing is disabled by default and can be enabled via the options passed into `addEventListener()`.

<br/>

To prevent event bubbling/capturing, use `stopPropagation()`. This method is available in the event object passed through event handler functions.

**question**

What is event delegation?

**answer**

Event delegation is a pattern based on event bubbling. Delegation allows containing elements to handle nested elements. Consider the following HTML:

```html
<div id="container">
    <button>1</button>
    <button>2</button>
    <button>3</button>
</div>
```

Suppose each button should have a click event listener that changes the clicked button's background color. Instead of adding an event to each button, a single event can be added to the container div:

```js
const container = document.getElementById("container");
container.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "blue";
});
```

NOTE: The event object contains these properties: `event.target` and `event.currentTarget`. <br/>`event.target` refers to the element that received the click event (i.e. the inner most element). `event.currentTarget` refers to the element that the event handler is attached to. This is why even though the container has the event listener, only the buttons are changed because the function uses `event.target`.

**question**

What is strict mode?

**answer**

Strict mode is the alternative to JavaScript's default non-strict mode. Strict mode changes syntax and runtime behavior, and can allow errors to be caught earlier in development. Strict mode can be applied to code by adding the `"use strict";` directive to the top of scripts or functions. Some of strict mode's features include:

-   changing some silent errors into thrown errors
-   reserving keywords that may exist in future versions of ECMAScript
-   disallowing assignment to undeclared variables
-   disallowing assignment/deletion to non-writable properties
-   disallowing duplicate parameter and property names
-   simplifying mapping of variable names to optimize runtime code

**question**

What is the purpose of the keyword `this`?

**answer**

`this` can refer to any value in strict mode. It must be a reference to an object in non-strict mode.<br/>
The value of `this` depends on its context: function, class, or global.

<br/>

In a function context, the value depends on how the function is called. In a typical strict mode function, `this` refers to the object that the function was accessed on, or `undefined` if the function was not accessed from an object. Callbacks usually have a `this` value of `undefined`. Arrow functions create closures with the `this` value of the enclosing execution context. In a constructor function, `this` refers to the new object that is created.

```js
function getThis() {
    "use strict";
    return this;
}

const obj = {
    name: "obj",
    getThis,
};

console.log(getThis()); // undefined
console.log(obj.getThis()); // { name: 'obj', getThis: getThis() }
```

Class constructors work similarly to function constructors, where `this` refers to the new object instance. However, static properties belong to the class itself, so `this` refers to the value of the class.

```js
class C {
    instance = this;
    static staticField = this;
}

const newC = new C();
console.log(newC.instance === newC); // true
console.log(C.staticField === C); // true
```

In the global context, `this` depends on the execution environment. In an HTML script, `this === window`. In a module, `this === undefined` at the top level.

**question**

Explain `call()`, `apply()`, and `bind()`.

**answer**

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

**question**

What is the difference between `==` and `===`?

**answer**

`==` is loose equality. `===` is strict equality.

The biggest difference between the two is that the `==` operator attempts to convert operands to the same type before comparing.

<br/>

`==` AND `===`

-   Object: true if both operands reference same object
-   String: true if both operands have same characters in same order
-   Number: true if both operands are same value
    -   `+0` and `-0` are equal
    -   `NaN` is never equal to itself
-   Boolean: true if operands are both `true` or both `false`

`==` ONLY

-   Attempts to convert operands into same type
-   If one operand is an object and one operand is a primitive, the object will be converted to a primitive.
-   If one operand is `null` or `undefined`, the other operand must also be `null` or `undefined` to return true. Returns false otherwise.

`===` ONLY

-   Returns false if operands are different types
-   `null !== undefined`

**question**

What is type coercion?

**answer**

Type coercion converts a value of one data type to a different data type. Coercion can be implicit (automatically done by JavaScript) or explicit (manually done by a developer).

```js
const val1 = 1;
const val2 = "2";

// Implicit coercion of numbers into strings
console.log(val1 + val2); // "12"

// Explicit coercion
console.log(val1 + Number(val2)); // 3
```

When an operand is a string, the `+` operator will act as string concatenation and other operands are coerced into strings.

```js
console.log(1 + 2 + "5"); // "35"
console.log(1 + "2" + 5); // "125"

console.log(1 - "1"); // 0
console.log(1 - "A"); // NaN
```

**question**

What is `NaN`?

**answer**

NaN is a special number value when an arithmetic operation cannot be expressed as a number. NaN is the only value in JavaScript not equal to itself.

```js
console.log(NaN == NaN); // false
```

**question**

What is the difference between function declarations and function expressions?

**answer**

Function Declaration

-   This is a function statement that provides a function name and uses the function keyword.
-   Declarations are hoisted to the top of function or global scope and can be used before declaration.

    ```js
    console.log(sum(1, 2)); // 3

    function sum(a, b) {
        return a + b;
    }
    ```

Function Expression

-   Function expressions cannot begin with the `function` keyword, to avoid ambiguity with function declarations.
-   Function expressions are not hoisted.
-   Names can be omitted to create an anonymous function.

    ```js
    console.log(sum(1, 2)); // ReferenceError

    const sum = function () {
        return a + b;
    };
    ```

**question**

What is an Immediately Invoked Function Expression (IIFE)?

**answer**

An IIFE is an anonymous function that runs as soon as it is defined.
The expression is wrapped by a grouping operator `()`.
Another set of parentheses follows the expression to immediately call the function.

```js
(function () {
    //
})();

(() => {
    //
})();
```

IIFEs are useful for keeping the global namespace clean, since variables declared inside the function will be discarded after execution.

**question**

What is currying?

**answer**

Currying is the transformation of a function that takes multiple arguments into a series of functions that take 1 argument.

`f(a, b, c)` turns into `f(a)(b)(c)`.

```js
function add(a, b, c) {
    return a + b + c;
}

// This function will perform currying on another function
function curry(func) {
    return function (a) {
        return function (b) {
            return function (c) {
                return a + b + c;
            };
        };
    };
}

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)); // 6
```

Currying can be used to create partial functions, where some arguments are fixed. Continuing from the code above:

```js
const add5 = curryAdd(5);
console.log(add5(3)(4)); // 12
```

**question**

Explain `forEach()`, `filter()`, `map()`.

**answer**

These functions are available in `Array.prototype`. Each function takes a callback, which is executed for every element in the array.

-   `forEach()` returns `undefined`. The callback's return value is discarded.
-   `filter()` returns a shallow copy of the array, containing elements that result in a truthy return value in the callback.
-   `map()` returns a new array populated by results returned by the callback.

```js
const nums = [1, 2, 3, 4, 5];

nums.forEach((num) => {
    console.log(num);
});

const even = nums.filter((num) => num % 2 === 0);
// [2, 4]

const square = nums.map((num) => num ** 2);
// [1, 4, 8, 16, 25]
```

**question**

Explain `reduce()`.

**answer**

`reduce()` is an `Array.prototype` method that returns a single value accumulated from processing every element in the array.

`reduce()` is passed a callback and an initial value, which if not provided will default to the value of the first element in the array.

The callback is passed the value returned by the previous callback execution, along with the current element in the array.

```js
const nums = [1, 2, 3, 4, 5];
const initialTotal = 0;

function callback(previousTotal, currentValue) {
    // For the first call of the callback, previousTotal == initialTotal
    return previousTotal + currentValue;
}

const sum = nums.reduce(callback, initialTotal);
console.log(sum); // 15
```

**question**

Explain `slice()` and `splice()`?

**answer**

Both functions are available in `Array.prototype`.

`slice()` returns a shallow copy of a portion of the array. The original array is not modified.

`splice()` removes or adds elements to the array. It returns an array of the removed elements. The original array is modified.

```js
const nums = ["a", "b", "c", "d", "e"];

// slice(start, end)
// start and end are indices. end is not inclusive
const sliceArray = nums.slice(2, 4); // ["c", "d"]

// splice(start, deleteCount, new1, ..., newN)
// start in an index
// deleteCount is the number of elements to remove starting at start
// newN are elements to add to the array, starting at start
const removed = nums.splice(2, 1, "x", "y", "z");
console.log(removed); // ["c"]
console.log(nums); // ["a", "b", "x", "y", "z", "d", "e"]
```

**question**

What is a `Promise`?

**answer**

A `Promise` represents a value that is not known until the completion of an asynchronous operation.

<br/>

A promise can be in one of three states: pending, fulfilled, or rejected.
The promise is said to be settled if it is either fulfilled or rejected.
The promise constructor takes a callback that is passed resolve/reject functions to manage the operation's result.

<br/>

`Promise` has three instance methods for handling the result after a promise is settled: `then()`, `catch()`, and `finally()`.
All three methods take callbacks and return promises, which allows chaining promises.
These promises depend on the callback's return value.
[More Info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax)

```js
function promiseCallback(resolve, reject) {
    const randomInt = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (randomInt % 2 === 0) {
            return resolve(randomInt);
        } else {
            return reject("not even");
        }
    }, 250);
}

const getEvenInt = new Promise(promiseCallback);

function fulfillCallback(value) {
    console.log(`Resolved: ${value}`);
    return value;
}

function rejectCallback(reason) {
    console.log(`Rejected: ${reason}`);
    return reason;
}

getEvenInt
    .then(fulfillCallback, rejectCallback)
    // The following then() does not have a reject callback
    .then((value) => {
        console.log(`Chained promise: ${value}`);
        if (Number.isInteger(value)) {
            return Promise.resolve(value);
        } else {
            return Promise.reject(value);
        }
    })
    .catch((reason) => {
        console.log(`Reject catch-all: ${reason}`);
    })
    .finally(() => {});
```

**question**

Explain `async` and `await`.

**answer**

`async` and `await` are keywords for working with promises without using `.then()`.

<br/>

`async` is used to create asynchronous functions. The return value is always a promise, where non-promise values are implicitly wrapped.

<br/>

`await` is a keyword that can only be used inside an `async` function. `await` suspends code execution within the function until the corresponding promise resolves. If the promise rejects, an error is thrown. This can be handled by wrapping the `await` line in a `try..catch` block. Without error handling, the thrown error will cause the main `async` function to return a rejected promise. This can be handled by `.catch()`.

```js
async function func() {
    try {
        const num = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(5);
                // reject("error");
            }, 250);
        });
        console.log(num);
    } catch (err) {
        console.log(err);
    }
}

// In case func() is a rejected promise
func().catch(() => console.log(`Catch`));
```

**question**

What does the `fetch()` function do?

**answer**

`fetch()` is a global function for requesting network resources. The function returns a promise, which resolves into a `Response` object when the network response is complete. The promise only rejects when the request fails. This means a valid response will be considered fulfilled regardless of the returned HTTP status.

<br/>

`fetch()` takes in a URL or `Request` object that points to the desired network resource. Options can also be passed, containing properties such as body, credentials, headers, and method.

<br/>

The returned `Response` object includes information about the response such as the HTTP status and the body, which contains the content of the requested resource. `Response.json()` can be used to parse the body into valid JSON.

```js
(async () => {
    const response = await fetch("https://someurl.com/resource", {
        method: "GET",
    });
    const responseJSON = await response.json();
})();
```

**question**

What is JSON?

**answer**

JSON stands for JavaScript Object Notation. It is a data interchange format used to store key/value pairs. JSON can represent strings, numbers, booleans, `null`, arrays, and objects made up of these types. Other data types such as functions and dates must be serialized (transformed) to a valid JSON type. JSON is supported by more languages than just JavaScript.

<br/>

In JavaScript, `JSON` is a built-in global object with static methods for handling JSON. The static methods are `parse()`, `stringify()`, `rawJSON()`, and `isRawJSON()`.

**question**

What is the `window` object?

**answer**

`window` is a global object available in browser environments. The window contains the DOM as well as many properties and methods such as `innerWidth`, `document`, `localStorage`, `fetch()`, and `setTimeout()`. Each tab in a browser is represented by its own window object.

**question**

What is the `DOM`?

**answer**

DOM stands for Document Object Model. It is an in-memory representation of an HTML document, storing content as nodes and objects.

<br/>

When the browser receives HTML, the HTML is analyzed and parsed. Elements and text content are used to create nodes, which are then organized in a tree structure. This structure is the DOM tree. The browser uses the tree to render and manage contents of the web page. The tree is accessible via the `document` property in the global `window` object.

**question**

Explain `localStorage` and `sessionStorage`.

**answer**

`localStorage` and `sessionStorage` are both properties of the global `window` object. The property allows access to a `Storage` object, which corresponds to the web page's current origin (protocol, domain, and port). Behavior for `file:` URLs (i.e. local files) is undefined.

<br/>

Data can be stored as key-value pairs. The `Storage` object provides these properties: `length`, `key()`, `getItem()`, `setItem()`, `removeItem()`, and `clear()`.

<br/>

Data in `localStorage` does not expire. However, data loaded into `localStorage` during a "private" browsing session will be cleared when all private browser tabs are closed.

<br/>

Data in `sessionStorage` is cleared when the page session ends. When a new tab is opened, a unique page session is created for that particular tab. A session lasts as long as the tab is open, and persists across page reload/restore. Opening tabs with the same URL will create a new `sessionStorage`, and duplicating a tab will copy the original tab's `sessionStorage`.

**question**

What are cookies and how can they be managed?

**answer**

A cookie is a piece of data that a server can store on a user's browser. Cookies are typically used for session management, personalization, or tracking. Users may change browser settings to accept/decline cookies.

<br/>

A server can send cookies by using the `Set-Cookie` header in a response. After the client receives this response, subsequent requests from the browser will automatically include these stored cookies in the `Cookie` header.

<br/>

Cookie Attributes

-   `Expires` and `Max-age` determine when the cookie will be deleted
-   `Secure` allows the cookie to only be sent to the server over the HTTPS protocol
-   `HttpOnly` denies cookie access via the JavaScript `Document.cookie` API
-   `Domain` determines whether subdomains will receive the cookie
-   `Path` sends the cookie if the requested URL matches
-   `SameSite` determines if the cookie can be sent from a cross-origin request
    -   `Strict`: only send the cookie if the request is from the origin site
    -   `Lax`: allow sending the cookie if the user navigates to the origin site from an external site. This is the default setting.
    -   `None`: allows cross-site requests but only through HTTPS. The `Secure` attribute must also be set.

**question**

What are the `defer` and `async` attributes in HTML scripts?

**answer**

When processing HTML, the browser downloads and executes code in script tags. This will block the rendering of HTML until the code fully runs, which creates a slow user experience.

<br/>

Setting the `defer` attribute in a script allows the browser to load the script in the background without blocking HTML. When the DOM is ready, the deferred script will execute. Deferred scripts keep relative order. This means that given two deferred scripts, the first script will always execute first even if the second script loads faster.

<br/>

The `async` attribute also allows a script to be non-blocking. Async scripts will run immediately after loading, without waiting for the DOM or any other script.

**question**

What is an iterator?

**answer**

An iterator implements the Iterator protocol and is an object that defines a sequence of data. The object contains a method `next()`, which always returns an object with the structure `{done: Boolean, value: any}`. `value` is the next value in the sequence, and `done` will be `true` at the end of the sequence.

```js
// Creates iterator that defines sequence [3, 2, 1, 0]
function createIterator(start = 3, end = 0) {
    let nextValue = start;

    const iterator = {
        next() {
            let result;
            if (nextValue >= end) {
                result = {
                    value: nextValue,
                    done: false,
                };
                nextValue -= 1;
                return result;
            }
            return { value: -1, done: true };
        },
    };
    return iterator;
}

const iter = createIterator();
iter.next(); // {value: 3, done: false}
iter.next(); // {value: 2, done: false}
iter.next(); // {value: 1, done: false}
iter.next(); // {value: 0, done: false}
iter.next(); // {value: -1, done: true}
iter.next(); // {value: -1, done: true}
```

**question**

What is a generator function?

**answer**

Generator functions are an alternative to iterators. Generator functions are created using the `function*` syntax and automatically return a type of iterator called a Generator. When the Generator's `next()` method is called, the code within the generator function will run until it encounters the `yield` keyword. The Generator returns objects with the structure `{done: Boolean, value: any}`. If the function is finished, the return value will be `{done: true, value: undefined}`. Generator functions return a new Generator with each call, and each Generator can only be iterated once.

```js
function* generate(start = 3, end = 0) {
    for (let i = 3; i >= 0; i--) {
        yield i;
    }
    return -1;
}

const iter = generate();
iter.next(); // {value: 3, done: false}
iter.next(); // {value: 2, done: false}
iter.next(); // {value: 1, done: false}
iter.next(); // {value: 0, done: false}
iter.next(); // {value: -1, done: true}
iter.next(); // {value: undefined, done: true}
```

**question**

What are arrow functions?

**answer**

Arrow functions are an alternative to function expressions. Arrow functions do not have their own binding to `this`, and cannot be used as constructors.

```js
// Regular function expression
function add(a, b) {
    return a + b;
}

// Equivalent arrow function
// The value after `=>` is implicitly returned
const add = (a, b) => a + b;

// Use braces and a return statement for longer functions
const add2 = (a, b) => {
    console.log(a);
    return a + b;
};
```

**question**

What is a rest parameter?

**answer**

The rest parameter allows functions to take infinite arguments as an array. The rest parameter is prefixed by `...`, and a function can only have one rest parameter as the last parameter.

```js
function print(a, b, ...moreArgs) {
    console.log(a, b, moreArgs);
}

print(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]
print(1, 2); // 1 2 []
print(1); // 1 undefined []
```

**question**

What is the spread operator?

**answer**

The spread operator is used to expand iterables or object properties into function arguments, array literals, or object literals.

```js
const array = [1, 2, 3];

// Function arguments
function add(x, y, z) {
    return x + y + z;
}
console.log(add(...array)); // 6

// Array literals
const newArray = [0, ...array, 4]; // [0, 1, 2, 3, 4]

// Object literals
const obj = { ...array }; // {0: 1, 1: 2, 2: 3}
const newObj = { ...obj, prop: "val" }; // { 0: 1, 1: 2, 2: 3, prop: "val" }
const newObj2 = { ...newObj, prop: "override" }; // { 0: 1, 1: 2, 2: 3, prop: "override" }
```

**question**

What is destructuring?

**answer**

Destructuring is unpacking values/properties from arrays/objects into their own variables.

```js
const array = [1, 2, 3, 4, 5];
const [x, y] = array;
console.log(x, y); // 1 2

const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a, b); // 1 2

const obj2 = { j: 1, k: { c: 2 } };
const {
    j,
    k: { c: d },
} = obj2;
console.log(j, d); // 1 2

const numbers = [];
const obj3 = { n: 1, m: 2 };
// Destructuring without declarations requires parentheses
({ n: numbers[0], m: numbers[1] } = obj3);
console.log(numbers); // [1, 2]

// Rest syntax places remaining variables in a new array/object
const [first, ...others] = [1, 2, 3];
console.log(others); // [2, 3]
```

**question**

Explain `WeakMap` and `WeakSet`.

**answer**

Objects take up memory, and can be accessed via references. As long as at least one reference to an object exists, the object will not be garbage collected by the JavaScript engine. `WeakMap` and `WeakSet` are data structures that store references to objects, but do not block garbage collection if no other references outside of the structure exist.

<br/>

`WeakMap` holds key-value pairs. The keys must be objects, not primitives. If there are no references to the object outside of the WeakMap, the object will be automatically removed from the WeakMap. `WeakSet` is similar except it must store objects. Both data structures do not support iteration or size because the behavior of garbage collection is not guaranteed.

<br/>

One use case for a WeakMap is to cache calculated data related to an object, reducing redundant processing. Once the associated object is removed, the WeakMap will also be cleaned up. This is better than using a traditional Map because the Map will keep the object reference, preventing garbage collection and taking up memory.

**question**

What is a class?

**answer**

Classes are templates for creating objects. Each element in a class can have these aspects:

-   Kind: getter, setter, method, or field
-   Location: static or instance
-   Visibility: public or private

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

**question**

What are some ways to optimize a website?

**answer**

-   Optimize images: compression, file format, lazy loading
-   Minify JavaScript, HTML, CSS
-   Enable compression: gzip reduces file sizes before network transfer
-   Utilize browser caching
-   Minimize server response time: optimize database queries, caching
-   Use Content Delivery Network (CDN)
-   Minimize HTTP requests and third-party scripts
-   Implement responsive design
-   Monitor and analyze performance

**question**

What is a JavaScript engine?

**answer**

A JavaScript engine is a program that translates JavaScript source code into machine code for execution. All modern browsers have a JavaScript engine. For example, Google Chrome uses the V8 engine, which is also used by Node.js.

<br/>

Modern JavaScript engines use JIT ("just in time") compilation to translate and execute JavaScript. The process generally goes as follows:

-   A parser uses the JavaScript source code to create an Abstract Syntax Tree (AST).
-   The AST is used to generate bytecode, an intermediate representation of the source code.
-   An interpreter translates the bytecode into machine code for immediate execution.
-   Executed code is profiled (tracked and analyzed) for possible optimizations.
-   The JIT compiler takes chunks of code that are run often (aka "hot paths") and generates optimized machine code, which will be used for subsequent execution.

An engine also contains a call stack and memory heap.

-   The call stack is a data structure for managing function calls. The stack stores the execution context (i.e. variables, scope, `this`) of each function. The stack can also store primitive values.

-   The memory heap is unstructured memory for storing dynamic data such as functions, objects, and arrays. The heap is where memory allocation and garbage collection occur.

**question**

What is a JavaScript runtime?

**answer**

A JavaScript runtime is the environment (set of components and resources) provided for executing JavaScript. Components include the JavaScript engine, APIs (e.g. DOM, fetch), and the callback queue.

<br/>

The callback queue (aka task queue or message queue) is a list of messages. Each message has an associated function to be called. For example, a click event will add a message to the queue, attached with its event listener callback function.

**question**

What is the event loop?

**answer**

The event loop is a mechanism in the JavaScript runtime for handling asychronous operations. The loop involves the call stack and the callback queue. One iteration (tick) of the loop goes as follows:

-   The tick starts when the call stack is empty.
-   The first message from the queue is moved to the call stack for execution.
-   The function in the call stack may call other functions or put more messages into the queue. Everything will be handled synchronously while the initial function remains in the call stack.
-   The tick ends when the call stack is empty again.

Ticks can last varying amounts of time depending on the number of operations that need to be processed.
