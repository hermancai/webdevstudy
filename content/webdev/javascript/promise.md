## title

Promise

## question

`Promise`

## answer

A `Promise` represents a value that is not known until the completion of an asynchronous operation.

<br/>

A promise can be in one of three states: pending, fulfilled, or rejected.
The promise is said to be settled if it is either fulfilled or rejected.
The promise constructor takes a callback that is passed resolve/reject functions to manage the operation's result.

<br/>

`Promise` has three instance methods for handling the result after a promise is settled: `then()`, `catch()`, and `finally()`.
All three methods take callbacks and return promises, which allows chaining promises.
These promises depend on the callback's return value.
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then#syntax" target="_blank">More Info</a>

```js
function promiseCallback(resolve, reject) {
    const randomInt = Math.floor(Math.random() * 10);
    setTimeout(() => {
        if (randomInt % 2 === 0) {
            return resolve(randomInt);
        } else {
            return reject("not even");
        }
    }, 250);
}

const getEvenInt = new Promise(promiseCallback);

function fulfillCallback(value) {
    console.log(`Resolved: ${value}`);
    return value;
}

function rejectCallback(reason) {
    console.log(`Rejected: ${reason}`);
    return reason;
}

getEvenInt
    .then(fulfillCallback, rejectCallback)
    // The following then() does not have a reject callback
    .then((value) => {
        console.log(`Chained promise: ${value}`);
        if (Number.isInteger(value)) {
            return Promise.resolve(value);
        } else {
            return Promise.reject(value);
        }
    })
    .catch((reason) => {
        console.log(`Reject catch-all: ${reason}`);
    })
    .finally(() => {});
```
