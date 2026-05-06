## title

Immediately Invoked Function Expression (IIFE)

## question

Immediately Invoked Function Expression (IIFE)

## answer

An IIFE is an anonymous function that runs as soon as it is defined.
The expression is wrapped by a grouping operator `()`.
Another set of parentheses follows the expression to immediately call the function.

```js
(function () {
    //
})();

(() => {
    //
})();
```

IIFEs are useful for keeping the global namespace clean, since variables declared inside the function will be discarded after execution.
