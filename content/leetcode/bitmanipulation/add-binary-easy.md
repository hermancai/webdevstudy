## title

Add Binary (Easy)

## question

<a href="https://leetcode.com/problems/add-binary/description" target="_blank">Add Binary</a> (Easy)

Given two binary strings `a` and `b`, return their sum as a binary string.

`a` and `b` consist only of `'0'` or `'1'` characters.

## answer

```py
# Time complexity: O(max(m, n)) where m = length of a, n = length of b
# Space complexity: O(max(m, n))
def addBinary(a: str, b: str) -> str:
    i, j, carry = len(a) - 1, len(b) - 1, 0
    answer = []

    # Loop backwards through both strings
    while i >= 0 or j >= 0:
        # Sum of carry, a[i], and b[j]
        digit = carry
        digit += int(a[i]) if i >= 0 else 0
        digit += int(b[j]) if j >= 0 else 0

        # If sum == 1 or 3, append 1
        answer.append(str(digit % 2))
        # If sum == 2 or 3, carry = 1
        carry = digit // 2
        i -= 1
        j -= 1

    if carry:
        answer.append("1")
    return "".join(reversed(answer))
```
