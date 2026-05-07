## title

Type coercion

## question

Type coercion

## answer

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
