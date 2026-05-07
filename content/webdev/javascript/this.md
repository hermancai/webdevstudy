## title

this

## question

`this`

## answer

`this` can refer to any value in strict mode. It must be a reference to an object in non-strict mode.<br/>
The value of `this` depends on its context: function, class, or global.

<br/>

In a function context, the value depends on how the function is called. In a typical strict mode function, `this` refers to the object that the function was accessed on, or `undefined` if the function was not accessed from an object. Callbacks usually have a `this` value of `undefined`. Arrow functions create closures with the `this` value of the enclosing execution context. In a constructor function, `this` refers to the new object that is created.

```js
function getThis() {
    "use strict";
    return this;
}

const obj = {
    name: "obj",
    getThis,
};

console.log(getThis()); // undefined
console.log(obj.getThis()); // { name: 'obj', getThis: getThis() }
```

Class constructors work similarly to function constructors, where `this` refers to the new object instance. However, static properties belong to the class itself, so `this` refers to the value of the class.

```js
class C {
    instance = this;
    static staticField = this;
}

const newC = new C();
console.log(newC.instance === newC); // true
console.log(C.staticField === C); // true
```

In the global context, `this` depends on the execution environment. In an HTML script, `this === window`. In a module, `this === undefined` at the top level.
