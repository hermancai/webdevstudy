## title

forEach(), filter(), map()

## question

`forEach()`, `filter()`, `map()`

## answer

These functions are available in `Array.prototype`. Each function takes a callback, which is executed for every element in the array.

- `forEach()` returns `undefined`. The callback's return value is discarded.
- `filter()` returns a shallow copy of the array, containing elements that result in a truthy return value in the callback.
- `map()` returns a new array populated by results returned by the callback.

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
