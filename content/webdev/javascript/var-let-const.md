## title

var, let, const

## question

`var`, `let`, `const`

## answer

`var`

- Global scope when declared outside a function. Function scope otherwise
- Can be re-declared and updated
- Gets hoisted to the top of its scope and initialized with `undefined`

`let`

- Block scope (i.e. any code bound by braces { }). This means variable names can be reused in different scopes without affecting other variables with the same name
- Can be updated but not re-declared
- Gets hoisted to the top of its scope but is not initialized with a value

`const`

- Block scope
- Cannot be re-declared or updated. This means initialization must happen during declaration.
- Gets hoisted to the top of its scope but is not initialized with a value

`var` always existed in JavaScript. `let` and `const` were introduced in ES6 (2015). A common guideline in modern JavaScript is to never use `var`, and always use `const` unless `let` is required.
