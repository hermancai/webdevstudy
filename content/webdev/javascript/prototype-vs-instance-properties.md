## title

Prototype vs instance properties

## question

Prototype vs instance properties

## answer

All objects created by one constructor function share the same prototype properties. Changing one object's instance property will not affect another object.

```js
class Integer {
    constructor(value) {
        this.value = value;
    }

    // Methods are stored in the class's prototype
    getValue() {
        return this.value;
    }
}
Integer.prototype.randomVal = 5; // Adding prototype property

const x = new Integer(1);
const y = new Integer(1);

x.value = 2; // Changing instance property
x.__proto__.randomVal = 4; // Changing prototype property
console.log(x.value, x.randomVal); // 2 4
console.log(y.value, y.randomVal); // 1 4
```
