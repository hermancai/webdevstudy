## title

keyof

## question

`keyof`

## answer

`keyof` creates a union of all keys in an object type.

```ts
type Coords = {
    lat: number;
    lng: number;
};
type C = keyof Coords; // type C = "lat" | "lng"
```

If the object type contains an index signature, `keyof` returns that key type.

```ts
type Obj = { [k: string]: unknown };
type O = keyof Obj; // type O = string | number

type List = { [x: number]: unknown };
type L = keyof List; // type L = number
```

`type O = string | number` because in JavaScript, numeric keys are coerced into strings. `obj[123]` means `obj["123"]`.

`type L = number` instead of `type L = string | number` because TypeScript distinguishes numeric index signatures for type checking. Object behavior will not change during JavaScript runtime.
