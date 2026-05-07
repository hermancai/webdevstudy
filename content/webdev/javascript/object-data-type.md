## title

Object data type

## question

Object data type

## answer

An object is the only mutable data type in JavaScript. It can be seen as a collection of two types of properties. All properties contain the attributes `enumerable` (boolean of whether the property can be enumerated in a for loop) and `configurable` (boolean of whether the property can be deleted, change property type, or change attributes).

<br/>

**Data property**: Key-value pairs. Keys are Strings or Symbols. Values can be any type. Data properties contain the attribute `writable`, a boolean of whether the property can be changed with assignment.

<br/>

**Accessor property**: Contains `get` and `set` functions, which will be called when the property is read.

```js
const user = {
    first: "John",
    last: "Smith"

    get fullName() {
        return `${this.first} ${this.last}`;
    }

    set fullName(value) {
        [this.first, this.last] = value.split(" ");
    }
}

console.log(user.fullName);  // Output: John Smith
user.fullName = "Joe Bob";  // first == "Joe"; last == "Bob"
```
