## title

slice() and splice()

## question

`slice()` and `splice()`

## answer

Both functions are available in `Array.prototype`.

`slice()` returns a shallow copy of a portion of the array. The original array is not modified.

`splice()` removes or adds elements to the array. It returns an array of the removed elements. The original array is modified.

```js
const nums = ["a", "b", "c", "d", "e"];

// slice(start, end)
// start and end are indices. end is not inclusive
const sliceArray = nums.slice(2, 4); // ["c", "d"]

// splice(start, deleteCount, new1, ..., newN)
// start in an index
// deleteCount is the number of elements to remove starting at start
// newN are elements to add to the array, starting at start
const removed = nums.splice(2, 1, "x", "y", "z");
console.log(removed); // ["c"]
console.log(nums); // ["a", "b", "x", "y", "z", "d", "e"]
```
