## title

Pow(x, n) (Medium)

## question

<a href="https://leetcode.com/problems/powx-n/description" target="_blank">Pow(x, n)</a> (Medium)

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e. `x^n`).

## answer

Solution logic:

- Example: `x = 3; n = 5`
- `n` can be split into parts. `3^1 * 3^2 * 3^3 == 3^5`
- Consider `n` in binary. `5 == 101`
    - `n` can be split based on the set bits. `3^4 * 3^1 == 3^5`
- `x` can be multiplied by powers of 2 to match `n`'s binary position.
    - `x^1 = 3^1 = 3`
    - `x^2 = 3^2 = 9`
    - `x^4 = 3^4 = 81`
    - `x^8 = 3^8 = 6561`
    - To get to the next binary position, multiply the current value by itself.

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def myPow(x: float, n: int) -> float:
    # Get reciprocal in case n is negative
    if n < 0:
        n = -n
        x = 1 / x

    answer = 1
    # Bitwise shift n left until n is depleted
    while n != 0:
        # Update answer if current last bit in n is set
        if n & 1:
            answer *= x

        # Shift n left for next iteration
        n >>= 1
        # Increase x to match current binary position in n
        x *= x

    return answer
```
