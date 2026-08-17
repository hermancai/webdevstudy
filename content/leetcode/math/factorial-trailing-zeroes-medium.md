## title

Factorial Trailing Zeroes (Medium)

## question

<a href="https://leetcode.com/problems/factorial-trailing-zeroes/description" target="_blank">Factorial Trailing Zeroes</a> (Medium)

Given an integer `n`, return the number of trailing zeroes in `n!`.

Note that `n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1`.

## answer

```py
def trailingZeroes(n: int) -> int:
    # Trailing zeroes come from 5 * an even number (5 * 2 = 10)
    # Powers of 5 create more than 1 zero (25 * 4 = 100, 125 * 8 = 1000)
    # The goal is to count all multiples of 5^x
    count, multiple = 0, 5

    while n >= multiple:
        count += n // multiple
        # 5, 25, 125, 625, ...
        multiple *= 5

    return count
```

Time: O(log n)

Space: O(1)
