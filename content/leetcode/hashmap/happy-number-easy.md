## title

Happy Number (Easy)

## question

<a href="https://leetcode.com/problems/happy-number/description" target="_blank">Happy Number</a> (Easy)

Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
- Those numbers for which this process ends in 1 are happy.

Return `true` if `n` is a happy number, and `false` if not.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(n)
def isHappy(n: int) -> bool:
    m = set()

    while True:
        if n in m:
            return False
        else:
            m.add(n)

        li = list(str(n))
        sum = 0
        for c in li:
            sum += int(c) ** 2
        if sum == 1:
            return True
        n = sum
```
