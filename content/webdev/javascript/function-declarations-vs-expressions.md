## title

Function declarations vs expressions

## question

Function declarations vs expressions

## answer

Function Declaration

- This is a function statement that provides a function name and uses the function keyword.
- Declarations are hoisted to the top of function or global scope and can be used before declaration.

    ```js
    console.log(sum(1, 2)); // 3

    function sum(a, b) {
        return a + b;
    }
    ```

Function Expression

- Function expressions cannot begin with the `function` keyword, to avoid ambiguity with function declarations.
- Function expressions are not hoisted.
- Names can be omitted to create an anonymous function.

    ```js
    console.log(sum(1, 2)); // ReferenceError

    const sum = function () {
        return a + b;
    };
    ```
