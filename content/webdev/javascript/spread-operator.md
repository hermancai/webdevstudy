## title

Spread operator

## question

Spread operator

## answer

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
