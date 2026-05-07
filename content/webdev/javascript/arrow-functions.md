## title

Arrow functions

## question

Arrow functions

## answer

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
