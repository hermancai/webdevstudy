## title

Plus One (Easy)

## question

<a href="https://leetcode.com/problems/plus-one/description" target="_blank">Plus One</a> (Easy)

You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i`<sup>th</sup> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return the resulting array of digits.

## answer

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
