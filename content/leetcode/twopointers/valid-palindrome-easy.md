## title

Valid Palindrome (Easy)

## question

<a href="https://leetcode.com/problems/valid-palindrome/description" target="_blank">Valid Palindrome</a> (Easy)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

## answer

```py
# Time complexity: O(n)
# Space complexity: O(1)
def isPalindrome(s: str) -> bool:
    start = 0
    end = len(s) - 1
    s = s.lower()
    while start < end:
        if not s[start].isalnum():
            start += 1
        elif not s[end].isalnum():
            end -= 1
        elif s[start] == s[end]:
            start += 1
            end -= 1
        else:
            return False
    return True
```
