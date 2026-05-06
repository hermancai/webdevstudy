## title

Factorial Trailing Zeroes (Medium)

## question

<a href="https://leetcode.com/problems/factorial-trailing-zeroes/description" target="_blank">Factorial Trailing Zeroes</a> (Medium)

Given an integer `n`, return the number of trailing zeroes in `n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

## answer

Solution logic:

- Trailing zeroes come from multiplying by 10, which comes from `2 * 5`.
- This means the answer is equal to the number of multiples of 5 in the factorial.
    - 2 does not need to be counted because any even number can be multiplied by 5 to make a trailing zero.
- There are multiples of 5 that contain more than one factor of 5 (e.g. `5^2 = 25`, `5^3 = 125`, `5^4 = 625`).
    - These multiples create more than one trailing zero. `25 * 4 = 100`, `125 * 8 = 1000`, `625 * 16 = 10000`
- Example 1: `n = 10`
    - `10! = 1 * 2 * 3 * 4 * 5 * 6 * 7 * 8 * 9 * 10`
    - There are `10 / 5 = 2` multiples of 5 (5 and 10).
    - The answer is 2.
- Example 2: `n = 25`
    - There are 5 multiples of 5 (5, 10, 15, 20, 25).
    - 25 contains 2 factors of 5, so 25 must be counted twice.
    - The answer is 6.
- Example 3: `n = 100`
    - There are 20 multiples of 5.
    - There are 4 multiples of 25 (25, 50, 75, 100).
    - The answer is 24.
- The solution is to find all multiples of 5, 25, 125, 625, and so on.

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
