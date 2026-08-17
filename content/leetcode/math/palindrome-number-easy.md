## title

Palindrome Number (Easy)

## question

<a href="https://leetcode.com/problems/palindrome-number/description" target="_blank">Palindrome Number</a> (Easy)

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## answer

```py
def isPalindrome(x: int) -> bool:
    if x < 0:
        return False

    original, reverse = x, 0

    while x > 0:
        reverse = reverse * 10 + x % 10
        x = x // 10

    return original == reverse
```

Time: O(n)

Space: O(1)

<br />

Alternative solution:

```py
def isPalindrome(x: int) -> bool:
    if x == 0:
        return True
    if x < 0 or x % 10 == 0:
        return False

    reverse = 0

    # Only check until middle digit
    while x > reverse:
        reverse = reverse * 10 + x % 10
        x = x // 10

    return x == reverse or x == reverse // 10
```

Time: O(n)

Space: O(1)
