## title

Sqrt(x) (Easy)

## question

<a href="https://leetcode.com/problems/sqrtx/description" target="_blank">Sqrt(x)</a> (Easy)

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator. For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

## answer

```py
def mySqrt(x: int) -> int:
    # Binary search
    left, right = 1, x

    while left <= right:
        mid = (left + right) // 2

        if mid * mid > x:
            right = mid - 1
        else:
            left = mid + 1

    # right is the last candidate that was not too large
    return right
```

Time: O(log n)

Space: O(1)
