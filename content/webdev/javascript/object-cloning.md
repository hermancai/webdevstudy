## title

Object cloning

## question

Object cloning

## answer

1. `Object.assign()` moves all enumerable own properties from a target to a source. Warning: If a value is a reference to an object, only the reference is copied. This means if the referenced object changes, the source and target are both affected.

    ```js
    const target = { a: 1, b: 2 };
    const source = { b: 4, c: 5 };

    const returnedTarget = Object.assign(target, source);

    console.log(returnedTarget); // Object { a: 1, b: 4, c: 5 }
    ```

2. Spread operator. Performs a shallow copy similar to `Object.assign()`.

    ```js
    const source = { val: 1 };
    const clone = { ...source };
    ```

3. `structuredClone()` performs a deep clone instead of copying references.
