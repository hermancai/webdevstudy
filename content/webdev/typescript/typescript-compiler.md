## title

TypeScript compiler

## question

TypeScript compiler

## answer

The TypeScript compiler is a program that converts TypeScript into JavaScript by removing all type information. For example:

```typescript
function greet(name: string, age: number) {
    console.log(`Hello. My name is ${name}. I am ${age}`);
}
```

becomes

```javascript
function greet(name, age) {
    console.log("Hello. My name is ".concat(name, ". I am ").concat(age));
}
```

Notice that the template string in TypeScript is converted to a string using `concat()`. This is because the compiler defaults converting to ES5, an old version of ECMAScript that excludes many newer language features. The language version can be changed using the `target` compiler option.

<br/>

By default, the compiler will always produce create a JavaScript file even if the TypeScript contains errors. This behavior can be changed by using the `noEmitOnError` compiler option.
