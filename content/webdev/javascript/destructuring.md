## title

Destructuring

## question

Destructuring

## answer

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
