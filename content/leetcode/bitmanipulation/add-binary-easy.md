## title

Add Binary (Easy)

## question

<a href="https://leetcode.com/problems/add-binary/description" target="_blank">Add Binary</a> (Easy)

Given two binary strings `a` and `b`, return their sum as a binary string.

`a` and `b` consist only of `'0'` or `'1'` characters.

## answer

```py
def addBinary(a: str, b: str) -> str:
    ia, ib, carry = len(a) - 1, len(b) - 1, 0
    answer = []

    # Loop backwords through both strings
    while ia >= 0 or ib >= 0:
        # digit can be 0, 1, 2, or 3
        digit = carry
        digit += int(a[ia]) if ia >= 0 else 0
        digit += int(b[ib]) if ib >= 0 else 0

        # If digit == 1 or 3, append 1
        answer.append(str(digit % 2))
        # If digit == 2 or 3, carry = 1
        carry = digit // 2
        ia -= 1
        ib -= 1

    if carry:
        answer.append("1")
    return "".join(reversed(answer))
```

Time: O(max(a, b))

Space: O(max(a, b))
