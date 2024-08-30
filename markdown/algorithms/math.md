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

**question**

<a href="https://leetcode.com/problems/factorial-trailing-zeroes/description" target="_blank">Factorial Trailing Zeroes</a> (Medium)

Given an integer `n`, return the number of trailing zeroes in `n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

**answer**

Solution logic:

-   Trailing zeroes come from multiplying by 10, which comes from `2 * 5`.
-   This means the answer is equal to the number of multiples of 5 in the factorial.
    -   2 does not need to be counted because any even number can be multiplied by 5 to make a trailing zero.
-   There are multiples of 5 that contain more than one factor of 5 (e.g. `5^2 = 25`, `5^3 = 125`, `5^4 = 625`).
    -   These multiples create more than one trailing zero. `25 * 4 = 100`, `125 * 8 = 1000`, `625 * 16 = 10000`
-   Example 1: `n = 10`
    -   `10! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10`
    -   There are `10 / 5 = 2` multiples of 5 (5 and 10).
    -   The answer is 2.
-   Example 2: `n = 25`
    -   There are 5 multiples of 5 (5, 10, 15, 20, 25).
    -   25 contains 2 factors of 5, so 25 must be counted twice.
    -   The answer is 6.
-   Example 3: `n = 100`
    -   There are 20 multiples of 5.
    -   There are 4 multiples of 25 (25, 50, 75, 100).
    -   The answer is 24.
-   The solution is to find all multiples of 5, 25, 125, 625, and so on.

```py
# Time complexity: O(log n)
# Space complexity: O(1)
def trailingZeroes(n: int) -> int:
    count = 0
    # Keep finding multiples by dividing n by 5
    # If n is large enough to reach the next exponent of 5, count will increase
    while n != 0:
        multiplesOfFive = n // 5
        count += multiplesOfFive
        n = multiplesOfFive
    return count
```

**question**

<a href="https://leetcode.com/problems/powx-n/description" target="_blank">Pow(x, n)</a> (Medium)

Implement `pow(x, n)`, which calculates `x` raised to the power `n` (i.e. `x^n`).

**answer**

Solution logic:

-   Example: `x = 3; n = 5`
-   `n` can be split into parts. `3^1 * 3^2 * 3^3 == 3^5`
-   Consider `n` in binary. `5 == 101`
    -   `n` can be split based on the set bits. `3^4 * 3^1 == 3^5`
-   `x` can be multiplied by powers of 2 to match `n`'s binary position.
    -   `x^1 = 3^1 = 3`
    -   `x^2 = 3^2 = 9`
    -   `x^4 = 3^4 = 81`
    -   `x^8 = 3^8 = 6561`
    -   To get to the next binary position, multiply the current value by itself.

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
