**question**

<a href="https://leetcode.com/problems/palindrome-number/description" target="_blank">Palindrome Number</a> (Easy)

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def isPalindrome(x: int) -> bool:
    if x == 0: return True
    # Palindrome cannot be negative or end with 0
    if x < 0 or x % 10 == 0:
        return False

    reverse = 0
    # Take half of digits from right side of x
    while x > reverse:
        reverse = reverse * 10 + x % 10
        x = x // 10

    return x == reverse or x == reverse // 10
```

**question**

<a href="https://leetcode.com/problems/plus-one/description" target="_blank">Plus One</a> (Easy)

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i`<sup>th</sup> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return the resulting array of digits.

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def plusOne(digits: List[int]) -> List[int]:
    for i in range(len(digits) - 1, -1, -1):
        if digits[i] < 9:
            digits[i] += 1
            return digits
        digits[i] = 0

    # This will only run if there is carry-over
    return [1] + digits
```

**question**

<a href="https://leetcode.com/problems/sqrtx/description" target="_blank">Sqrt(x)</a> (Easy)

Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator. For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

**answer**

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
