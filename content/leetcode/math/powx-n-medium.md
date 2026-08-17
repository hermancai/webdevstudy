## title

Pow(x, n) (Medium)

## question

<a href="https://leetcode.com/problems/powx-n/description" target="_blank">Pow(x, n)</a> (Medium)

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e. `x^n`).

## answer

```py
# Brute force solution of looping n times is slow if n is large
# Example: x = 5, n = 11 (5^11)
# 11 in binary = 1011 ---> 5^11 = 5^8 * 5^2 * 5^1
# Loop n in binary, multiplying answer only when current bit == 1
def myPow(x: float, n: int) -> float:
    # Use reciprocal if n is negative
    if n < 0:
        n = -n
        x = 1 / x

    answer = 1

    while n:
        if n & 1:
            answer *= x

        # Double power of x to match n position (x^4 * x^4 = x^8)
        x *= x
        # Shift n right once to get next binary bit
        n >>= 1

    return answer
```

Time: O(log n)

Space: O(1)
