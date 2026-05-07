## title

Temporal Dead Zone

## question

Temporal Dead Zone

## answer

Variable declarations get hoisted in JavaScript. Initialization is not hoisted. If a `let` or `const` variable is accessed before the declaration line of code at runtime, a `ReferenceError` will occur. The range in code from the start of the variable's scope to the line of declaration is a temporal dead zone. `var` variables do not have a temporal dead zone because they are hoisted and immediately initialized with a value of `undefined`.

```js
{
    // Start of temporal dead zone for x
    console.log(x); // ReferenceError
    console.log(y); // undefined

    let x = 1; // End of temporal dead zone for x
    var y = 2;
}
```
