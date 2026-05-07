## title

Iterator

## question

Iterator

## answer

An iterator implements the Iterator protocol and is an object that defines a sequence of data. The object contains a method `next()`, which always returns an object with the structure `{done: Boolean, value: any}`. `value` is the next value in the sequence, and `done` will be `true` at the end of the sequence.

```js
// Creates iterator that defines sequence [3, 2, 1, 0]
function createIterator(start = 3, end = 0) {
    let nextValue = start;

    const iterator = {
        next() {
            let result;
            if (nextValue >= end) {
                result = {
                    value: nextValue,
                    done: false,
                };
                nextValue -= 1;
                return result;
            }
            return { value: -1, done: true };
        },
    };
    return iterator;
}

const iter = createIterator();
iter.next(); // {value: 3, done: false}
iter.next(); // {value: 2, done: false}
iter.next(); // {value: 1, done: false}
iter.next(); // {value: 0, done: false}
iter.next(); // {value: -1, done: true}
iter.next(); // {value: -1, done: true}
```
