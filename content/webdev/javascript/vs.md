## title

== vs ===

## question

`==` and `===`

## answer

`==` is loose equality. `===` is strict equality.

The biggest difference between the two is that the `==` operator attempts to convert operands to the same type before comparing.

<br/>

`==` AND `===`

- Object: true if both operands reference same object
- String: true if both operands have same characters in same order
- Number: true if both operands are same value
    - `+0` and `-0` are equal
    - `NaN` is never equal to itself
- Boolean: true if operands are both `true` or both `false`

`==` ONLY

- Attempts to convert operands into same type
- If one operand is an object and one operand is a primitive, the object will be converted to a primitive.
- If one operand is `null` or `undefined`, the other operand must also be `null` or `undefined` to return true. Returns false otherwise.

`===` ONLY

- Returns false if operands are different types
- `null !== undefined`
