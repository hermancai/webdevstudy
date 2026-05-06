## title

Discriminated Unions

## question

Discriminated Unions

## answer

```ts
interface Square {
    kind: "square";
    length: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}
```

Discriminated unions are unions where every type contains a shared property with a literal type. Using the interfaces above, `Circle | Square` is a discriminated union because both types contain the `kind` property, which is declared with a string literal. This allows TypeScript to perform narrowing.

```ts
type Shape = Circle | Square;

function getArea(shape: Shape) {
    if (shape.kind === "circle") {
        // ...
    }
}

// Or with a switch statement
function getArea(shape: Shape) {
    switch (shape.kind) {
        case "circle":
        // ...
        case "square":
        //...
    }
}
```
