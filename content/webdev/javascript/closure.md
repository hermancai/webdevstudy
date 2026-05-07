## title

Closure

## question

Closure

## answer

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
