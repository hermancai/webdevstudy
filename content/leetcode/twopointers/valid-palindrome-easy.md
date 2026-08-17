## title

Valid Palindrome (Easy)

## question

<a href="https://leetcode.com/problems/valid-palindrome/description" target="_blank">Valid Palindrome</a> (Easy)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

## answer

```py
def isPalindrome(s: str) -> bool:
    s = s.lower()
    left, right = 0, len(s) - 1

    while left < right:
        if not s[left].isalnum():
            left += 1
        elif not s[right].isalnum():
            right -= 1
        elif s[left] != s[right]:
            return False
        else:
            left += 1
            right -= 1

    return True
```

Time: O(n)

Space: O(1)
