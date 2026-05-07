## title

Generator functions

## question

Generator functions

## answer

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
