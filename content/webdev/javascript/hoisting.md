## title

Hoisting

## question

Hoisting

## answer

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
const y; // SyntaxError
```
