## title

Palindrome Number (Easy)

## question

<a href="https://leetcode.com/problems/palindrome-number/description" target="_blank">Palindrome Number</a> (Easy)

Given an integer `x`, return `true` if `x` is a palindrome, and `false` otherwise.

## answer

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
