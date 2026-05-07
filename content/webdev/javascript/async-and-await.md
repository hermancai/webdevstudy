## title

async and await

## question

`async` and `await`

## answer

`async` and `await` are keywords for working with promises without using `.then()`.

<br/>

`async` is used to create asynchronous functions. The return value is always a promise, where non-promise values are implicitly wrapped.

<br/>

`await` is a keyword that can only be used inside an `async` function. `await` suspends code execution within the function until the corresponding promise resolves. If the promise rejects, an error is thrown. This can be handled by wrapping the `await` line in a `try..catch` block. Without error handling, the thrown error will cause the main `async` function to return a rejected promise. This can be handled by `.catch()`.

```js
async function func() {
    try {
        const num = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(5);
                // reject("error");
            }, 250);
        });
        console.log(num);
    } catch (err) {
        console.log(err);
    }
}

// In case func() is a rejected promise
func().catch(() => console.log(`Catch`));
```
