## title

Prototypes

## question

Prototypes

## answer

Every object in JavaScript has a built-in property called its prototype. The prototype itself is an object. This creates a prototype chain, which ends when the prototype value is `null`.

<br/>

All browsers use `__proto__` to point to an object's prototype. `Object.getPrototypeOf()` is the standard way to access a prototype. `Object.prototype` is the object that serves as the most basic prototype, which all objects have by default. This prototype itself contains a prototype of `null`, which ends the prototype chain.

```js
const date = new Date();
console.log(Object.getPrototypeOf(date)); // Date.prototype
console.log(Object.getPrototypeOf(date.__proto__)); // Object
console.log(Object.getPrototypeOf(date.__proto__.__proto__)); // null
```

When accessing an object property, the prototype chain will be traversed until the property is found, starting with the initial object. If the property cannot be found, `undefined` is returned.
