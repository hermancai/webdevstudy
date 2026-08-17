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
def isHappy(n: int) -> bool:
    s = set()

    while True:
        total = sum([int(c) * int(c) for c in str(n)])

        if total == 1:
            return True
        if total in s:
            return False

        n = total
        s.add(total)
```

Time: O(n)

Space: O(n)

<br />

Alternative solution:

```py
def isHappy(self, n: int) -> bool:
    def getTotal(n: int) -> int:
        total = 0
        while n > 0:
            digit = n % 10
            total += digit * digit
            n = n // 10
        return total

    slow = fast = n

    while True:
        slow = getTotal(slow)
        fast = getTotal(getTotal(fast))

        if fast == 1:
            return True
        if slow == fast:
            return False
```

Time: O(n)

Space: O(1)
