## title

Is Subsequence (Easy)

## question

<a href="https://leetcode.com/problems/is-subsequence/description" target="_blank">Is Subsequence</a> (Easy)

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

## answer

```py
def isSubsequence(s: str, t: str) -> bool:
    if not s:
        return True

    i = 0

    for char in t:
        if char == s[i]:
            i += 1
        if i == len(s):
            return True

    return False
```

Time: O(n)

Space: O(1)
