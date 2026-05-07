## title

Number of 1 Bits (Easy)

## question

<a href="https://leetcode.com/problems/number-of-1-bits/description" target="_blank">Number of 1 Bits</a> (Easy)

Write a function that takes the binary representation of a positive integer and returns the number of set bits it has (also known as the Hamming weight).

## answer

```py
# Time complexity: O(log(n))
#   If n has a max number of bits, such as 32, time complexity is O(1).
# Space complexity: O(1)
def hammingWeight(n: int) -> int:
    count = 0

    # Shift n in binary to right side while checking last bit
    while n > 0:
        if n & 1:
            count += 1
        n >>= 1
    return count
```
