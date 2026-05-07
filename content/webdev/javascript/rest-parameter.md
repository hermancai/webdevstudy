## title

Rest parameter

## question

Rest parameter

## answer

The rest parameter allows functions to take infinite arguments as an array. The rest parameter is prefixed by `...`, and a function can only have one rest parameter as the last parameter.

```js
function print(a, b, ...moreArgs) {
    console.log(a, b, moreArgs);
}

print(1, 2, 3, 4, 5); // 1 2 [3, 4, 5]
print(1, 2); // 1 2 []
print(1); // 1 undefined []
```
