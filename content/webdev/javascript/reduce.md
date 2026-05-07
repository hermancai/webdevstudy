## title

reduce()

## question

`reduce()`

## answer

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
