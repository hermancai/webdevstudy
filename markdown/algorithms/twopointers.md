**question**

<a href="https://leetcode.com/problems/valid-palindrome/description" target="_blank">Valid Palindrome</a> (Easy)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.

**answer**

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

**question**

<a href="https://leetcode.com/problems/is-subsequence/description" target="_blank">Is Subsequence</a> (Easy)

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

**answer**

```py
# Time complexity: O(n)
# Space complexity: O(1)
def isSubsequence(s: str, t: str) -> bool:
    si = ti = 0

    while si < len(s) and ti < len(t):
        if s[si] == t[ti]:
            si += 1
        ti += 1

    return si == len(s)
```
