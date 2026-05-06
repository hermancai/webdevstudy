## title

Currying

## question

Currying

## answer

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
