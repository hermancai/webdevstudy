## title

Sqrt(x) (Easy)

## question

<a href="https://leetcode.com/problems/sqrtx/description" target="_blank">Sqrt(x)</a> (Easy)

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator. For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

## answer

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def mySqrt(x: int) -> int:
    start, end = 0, x
    # Binary search
    while True:
        mid = (start + end) // 2
        if mid * mid > x:
            end = mid - 1
        else:
            # Square root is between mid and mid + 1
            if (mid + 1) * (mid + 1) > x:
                return mid
            start = mid + 1
```
